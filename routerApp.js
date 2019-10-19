// The application will go here

const express = require('express');
const helmet = require('helmet');

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());

const router = require('./theRouter');
const userRouter = require('./userRouter');
app.use('/', router);
// app.use('/admin', adminRouter);
app.use('/user', userRouter);


app.listen(port, () => {
    console.log(`express is running on port ${port}`);
});
