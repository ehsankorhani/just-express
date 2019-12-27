### Section 10

## REST API

### Richardson Maturity Model

- Level 0 - The Swamp of POX
- Level 1 - Resources
- Level 2 - Methods
- Level 2.1 - HTTP headers
- Level 2.2 - Query Parameters
- Level 2.3 - Status Codes
- Level 3 - Hypermedia Controls

Use ```express.js``` to build a backend REST API. 

### Express.js
Express is a routing and middleware web framework.

**express.urlencoded**

```js
app.use(express.urlencoded({ extended : true })) // allows you to create a nested object from query string
app.use(express.urlencoded({ extended : false })) // does not support creating a nested object
```
> When extended property is set to ```true```, the URL-encoded data will be parsed with the [qs](https://www.npmjs.com/package/qs) library.

> when extended property is set to ```false```, the URL-encoded data will instead be parsed with the [querystring](https://www.npmjs.com/package/query-string) library.

<br />

**req**

**res**

**next**

Calling this function invokes the next middleware function in the app.

examples:

In this code the first middle will run, but nothing will return to the API caller.
<br />
Browser will keep waiting until the timeout.

```js
app.use((req, res) => {
  console.log('This is a middleware') // will execute
})

app.use((req, res) => {
  console.log('This is another middleware') // will not execute
})

app.get('/', (req, res) => {
  return res.send(`welcome to express`) // will not execute and nothing will return to client
})
```

Using ```next()``` will pass the execution to the next middleware.

```js
app.use((req, res, next) => {
  console.log('This is a middleware') // will execute 1st
  next()
  console.log('This is a callback trigger') // will execute 4th
})

app.use((req, res, next) => {
  console.log('This is another middleware') // will execute 2nd
  next()
})

app.get('/', (req, res) => {
  return res.send(`welcome to express`) // will execute 3rd and return response to client
})
```

To avoid triggering the callback and fourth execution, do ```return next()```

```js
app.use((req, res, next) => {
  console.log('This is a middleware')
  return next()
  console.log('This is a callback trigger') // unreachable and will not execute
})

app.use((req, res, next) => {
  console.log('This is another middleware')
  return next()
})

app.get('/', (req, res) => {
  return res.send(`welcome to express`)
})
```

**Middleware**
<br />
Middleware functions are functions that have access to the request object (req), the response object (res).

Values can be attached to ```request``` before the next piece of middleware or routes.

```js
app.use((req, res, next) => {
  req.newProp = "I'm new "; // newProp is attached to req
  return next();
});

app.get('/', (req, res) => {
  return res.send(req.newProp) // newProp is accessible on the req object in any subsequent middleware
})
```

---
### Reference
[4 Maturity Levels of REST API Design](https://blog.restcase.com/4-maturity-levels-of-rest-api-design/)
<br />
[Express Guide](http://expressjs.com/en/guide/routing.html)
<br />
[How to create a REST API with Express.js in Node.js](https://www.robinwieruch.de/node-express-server-rest-api)