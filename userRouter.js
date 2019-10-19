const express = require('express');
let router = express.Router();

function validateUser(req, res, next) {
    res.locals.validated = true;
    console.log('validated!');
    next();
}

// the middleware has only to be added to this route
// the main app doesn't know about it.
router.use(validateUser);   

router.get('/', (req, res, next) => {
    res.json({
        msg: 'User page!'
    });
});

module.exports = router;
