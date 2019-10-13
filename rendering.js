const path = require('path');
const express = require('express');
const app = express();

const helmet = require('helmet');
app.use(helmet());

// serve up static files
app.use(express.static('public'));
// parse json and urlencoded data into re.body
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// app.set can store anything.
// but certain names can be used to configure the behaviour of the server.
// the view engine must be installed
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res, next) => {
    // this works:
    // res.json({
    //     msg: 'Success!'
    // })

    // res.render({
    //     msg: 'Success!'
    // });

    // it needs to find a file called 'index.ejs', (because the view-engine is ejs) 
    // in 'views' folder.
    // 'views' can be set as well to point to specific directory.
    res.render("index");
});

app.listen(3000, () => {
    console.log(`express is running on port 3000`);
})
