const path = require('path');
const express = require('express');
const app = express();

// app comes with a 'use' method
// it mounts the specified middleware function at the specific path.
// the middleware function is executed when the base of the requested path matches path.
// 'use' takes one arg: the middleware you want to run
app.use(express.static('public'));
// anything under public will be publicly accessible:
// localhost:3000/node.png

app.all('/' , (req, res) => {
    console.log(path.join(__dirname + '/node.html'));
    res.sendFile(path.join(__dirname + '/node.html'))
});

app.listen(3000, () => {
    console.log('express is running on port 3000');
});