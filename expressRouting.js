const express = require('express');
const app = express();

// app object has different methods:
// get, port, delete, put (http verbs)
// they take two args:
// path and callback to run if an HTTP request matches the verb

// app.all('/' , (req, res) => {
//     res.send('<h1>Welcome to the home page!</h1>');
// });

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the home GET page!</h1>');
});

// Call this from Postman
app.post('/', (req, res) => {
    res.send('<h1>Welcome to the home POST page!</h1>');
});

app.delete('/', (req, res) => {

});

app.put('/', (req, res) => {

});

// express works from top-down.
// if no other route matches, this will run:
app.all('*' , (req, res) => {
    res.send('<h1>Sorry, this page does not exist!</h1>');
});

app.listen(3000, () => {
    console.log('express is running on port 3000');
});