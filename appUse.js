const express = require('express');
const app = express();

// the req, res, next args makes this a middleware
function validateUser(req, res, next) {
    // 'locals' contains response local variables scoped to the request
    // it is available on 'res' object and is good to pass values between middlewares
    res.locals.validate = true;
    console.log("VALIDATION RAN!");

    // I want to hand the control to the next middleware in the cycle.
    // if not used, the cycle will be terminated and no other middleware will be called.
    next();
}

//app.use(validateUser); // --> runs on all routes and paths and methods
//app.use('/admin', validateUser); // --> runs on '/admin' on all methods
app.get('/admin', validateUser); // --> runs on '/admin' on 'get' method

app.get('/', (req, res, next) => {
    res.send('<h1>Main Page</h1>');

    // 'locals.validate' cannot be accessed:
    console.log('res.locals.validate:', res.locals.validate)
});

app.get('/admin', (req, res, next) => {
    res.send('<h1>Main Page</h1>');

    // 'locals.validate' can be accessed:
    console.log('res.locals.validate:', res.locals.validate)
});

app.listen(3000, () => {
    console.log(`express is running on port 3000`);
})