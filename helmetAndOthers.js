const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const app = express();

// use helmet as soon as possible
app.use(helmet());

app.use(express.static('public'));

// This built-in middleware function,
// parses incoming requests with JSON payloads 
// and is based on 'body-parser'.
// 'body-parser' is an 'express' dependency module and installs with express.
// 'req' is String and has to be parsed.
app.use(express.json());

// parses incoming requests with urlencoded payloads and is based on body-parser.
// the type of request will be: "application/x-www-form-urlencoded"
// which is usually the default type
app.use(express.urlencoded({extended:false}));

app.post('/ajax', (req, res) => {
    console.log(req.body);

    // This is not a valid response. Therefore, will not be received by ajax promise then response.
    //res.send('Test');

    // if we try this with Postman we will be able to get the response.
    // The content-type = text/html
    // The Ajax doesn't know what to do with text/html
    // so, we should use 'res.json()' -> to convert the content-type to application/json
    res.json('Test');
});

app.listen(3000, () => {
    console.log(`express is running on port 3000`);
})