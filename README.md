### Section 5

## Middleware and Rendering

Express is two things:
1. Router
2. Middleware that comprises a web framework

Req --- MIDDLEWARE ---> Res

Middleware function is ANY function that has access to the req,res, and next objects.

example:
Req --- MIDDLEWARE ---> Res

1. Request comes in
2. Validate the user
3. Store some thing in the DB
4. Parse and store data from user
5. Response

--- 

app.get() is the same as app.use() but only acts on 'get' requests.

### Helmet
Helmet helps you secure your Express apps by setting various HTTP headers.
It's a collection of 12 little pieces of middleware that set HTTP headers.

```bash
$ npm install helmet --save
```

and use them by:
```javascript
// All functions:
app.use(helmet());
// or specific one:
app.use(helmet.functionName());
```

### Response Type: res.render() vs res.json()
With res.render() we can process the HTML+JS+CSS and return that to browser.
It's a server-side rendering.
Session variables and Cookies can be used with this method. 


With res.json() we return JSON to API clients such as a React app.

### Rendering
In order for this to work:
```javascript
res.render({
    msg: 'Success!'
})
```

1. A view engine should be defined.
* EJS
* Mustache
* Handlebars
* Jade/Pug
2. Define ```res.render()``` inside one of the routes,
3. this function takes two args:
* File we want to use
* Data we want to send to that file
4. The view engine takes HTML/JS/CSS and combines them with other Data
5. The final result of this process is a compiled product of the things browser can display. 
    


### Reference
[Just Express by Robert Bunch](https://practifitraining.udemy.com/course/just-express-with-a-bunch-of-node-and-http-in-detail)