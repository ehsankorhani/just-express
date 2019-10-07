// install express third-party package
const express = require('express');

// express/lib/express.js -> createApplication()
const app = express();

// all method takes two args: 
// a route and a callback to run if the route is requested.
app.all('*' , (req, res) => {
    // express handles the basic headers (status code, mime-type)
    res.send('<h1>This is the home page</h1>');
    // express handles the end
});

app.listen(3000, () => {
    console.log('express is running on port 3000');
});
