const path = require('path');

const express = require('express');
const helmet = require('helmet');

const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());


// write your own middleware to capture query strings
app.use((req, res, next) => {
    if (req.query.msg === 'fail') {
        res.locals.msg = `Sorry, this username and password does not exist`;
    } else {
        res.locals.msg = ``;
    };

    next();
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res, next) => {
    res.send(req.body);
});

app.get('/login', (req, res, next) => {

    //we can read query string from requests
    //req.query.msg

    //we can change HTTP headers
    res.set('Date', new Date(1978,6,20));
    res.set('Content-Type', 'text/plain');
    res.set('Cache-Control', 'no-store');


    //also can read header values:
    console.log(req.fresh)
    console.log(req.stale)
    console.log(req.ips) // user is behind firewall/router/... , the real IP is not visible
    console.log(req.accepts(['html', 'json']))




    res.render('login');
});

// HTML form action will get values in "name" attribute 
// and it's gonna come as "urlencoded"
// express.urlencoded middleware will parse the message and put it in req.body.
// i.e. {"username":"E","password":"K"}
app.post('/process_login', (req, res, next) => {
    //res.json('Hello World!');
    //res.json(req.body);

    const username = req.body.username;
    const password = req.body.password;

    // save the values in to a cookie
    if (password === 'asdf') {
        // res.cookie takes at least two args: name of the cookie and value
        res.cookie('username', username);
        // one arg: where to send the browser
        res.redirect('/welcome');
    } else {
        res.redirect('/login?msg=fail');
    }
});

app.get('/welcome', (req, res, next) => {
    // req.cookies object has a property for every named cookie that has been set.
    // extra middleware is needed: cookie-parser
    res.render('welcome', {
        username: req.cookies.username
    });
});

//app.param takes two args: param to look for in param - and the callback to run
// we want to check before any route to see if any route has a particular param
app.param('id', (req, res, next) => {
    console.log(id);
    next()
});

// In a route the colon (:) sign creates a wildcard
// wildcard will match anything in that slot
app.get('/story/:storyId', (req, res, next) => {
    // req.params has a property for each wildcard in the route 
    const storyId = req.params.storyId;
    res.send(`<h1>Story ${storyId}</h1>`);
});

app.get('/story/:storyId/:link', (req, res, next) => {
    res.send(`<h1>Story ${req.params.storyId} - ${req.params.link}</h1>`);
});

app.get('/statement', (req, res, next) => {
    // // Render the image in browser
    // res.sendFile(path.join(__dirname, "userStatements/BankStatement.png"));

    // 1. filename
    // 2. optionally the new filename
    // 3. callback with error
    res.download(path.join(__dirname, "userStatements/BankStatement.png"), 'statement.png', (error) => {
        // headers may already been sent
        // i.e.
        if (error) {
            if (!res.headersSent) {
                res.redirect('/download/error');
            }
        }
    });
    // with Postman a new header of: 'content-disposition' will be available
    // this is the main thing res.download will do

    // we could manually do:
    // res.set('Content-Disposition', 'attachment');
    // res.sendFile
});

app.get('/logout', (req, res, next) => {
    // one arg: name of cookie
    res.clearCookie('username');
    res.redirect('/login');
});

app.listen(port, () => {
    console.log(`express is running on port ${port}`);
});
