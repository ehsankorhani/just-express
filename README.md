### Section 9

## Authentication with Passport.js
Passport is authentication middleware for Node.js.

Install _passport_ module by this command:

```bash
npm install --save passport
```

#### Passport Strategy

We need a Strategy for authentication.
We can use GitHub OAuth 2.0 authorization.

```bash
npm install --save passport-github
```

in [Register a new OAuth application](https://github.com/settings/applications/new) create a new application.

In _Authorization callback URL_ enter a real path to your application.


It is going to be ```http://localhost:3000/auth``` for our development purposes.

Copy Client ID and Client Secret to config.js. 


### Reference
[Just Express by Robert Bunch](https://practifitraining.udemy.com/course/just-express-with-a-bunch-of-node-and-http-in-detail)