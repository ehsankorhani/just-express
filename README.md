### Section 6

## Request, Response, Router and Express Generator

### Session vs Cookie
**Cookie** data stored entirely on the browser, and the browser will send them to server every time a request is made.

**Session** is stored on the server, and the browser is given a key for that data.

Session is not included with Express.

### Router
'express.Router()` create mini application inside the app. Its job is to handle middleware and routes.
It's a good way to modularize the app.

### HTTP Headers
Anytime you use:

res.json <br />
    .render <br />
    .send <br />
    .sendFile <br />
    .download <br />
    .redirect <br />

You are NOT sending a webpage, json, file, etc.
You are sending HTTP message.

You don't control the other side will do with the message. 
But we follow the rules - Protocols.



### Reference
[Just Express by Robert Bunch](https://practifitraining.udemy.com/course/just-express-with-a-bunch-of-node-and-http-in-detail)