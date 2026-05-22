# Capstone Backend

This document outlines the architecture, libraries, methods, and custom functions utilized across the provided full-stack codebase. The project consists of a React-based frontend and a Node.js/Express backend with MongoDB integration.

## Tech Stack & Libraries Used

### Frontend Libraries

1. React (react): The core library used for building the user interface.

2. Tailwind CSS: Used for styling via utility classes (e.g., grid, sm:grid-cols-2, bg-yellow-100).

### Backend Libraries

1. Express (express): The core web framework for routing and handling HTTP requests.

2. Mongoose (mongoose): An Object Data Modeling (ODM) library for MongoDB and Node.js.

3. Bcrypt.js (bcryptjs): Used for hashing and securely comparing passwords.

4. JSON Web Token (jsonwebtoken): Used for generating and verifying authentication tokens.

5. Dotenv (dotenv): Used to load environment variables from a .env file into process.env.

6. Cookie Parser (cookie-parser): Middleware to parse HTTP request cookies (used for JWT).

7. CORS (cors): Middleware to enable Cross-Origin Resource Sharing.

### Core Methods & Functions Used

1. React & Frontend Methods

* Functional Components: Products(), Product({ productObj })

* JavaScript Array Methods:

    * Array.prototype.map(): Used in Products.jsx to iterate over the products array and render multiple Product components dynamically.

    * Object Destructuring: Extracting values efficiently (e.g., const { productId, name, price, brand, description, image } = productObj;).

2. Express.js Methods

* exp(): Initializes the Express application.

* app.use(): Mounts middleware functions (CORS, body parsing, cookie parsing, error handling).

* app.listen(): Starts the HTTP server on a specified port.

* exp.Router(): Creates modular, mountable route handlers (used for userRoute, commonRouter, etc.).

* router.get(), router.post(), router.put(): Define specific HTTP method routes.

##### Response Methods:

    * res.status(): Sets the HTTP status code.

    * res.json(): Sends a JSON response.

    * res.cookie(): Sets a cookie (used for storing the JWT).

    * res.clearCookie(): Clears a cookie (used for logout).

3. Mongoose (MongoDB) Methods

##### Connection & Setup:

    * connect(): Establishes a connection to the MongoDB database.

    * new Schema(): Defines the structure of the database documents (used in UserModel and ArticleModel).

    * model(): Compiles the schema into a workable model.

##### Document Methods:

    * document.validate(): Validates document fields before saving.

    * document.save(): Saves a new or updated document to the database.

    * document.toObject(): Converts a Mongoose document into a plain JavaScript object (used to remove the password before sending the response).

##### Query Methods:

    * Model.findOne(): Finds a single document matching the criteria (used for login).

    * Model.findById(): Finds a document by its Object ID (used in checkUser and checkAuthor).

    * Model.find(): Retrieves multiple documents (used to fetch active articles).

    * Model.populate(): Replaces specified paths in the document with document(s) from other collections (e.g., populating author details in articles).

    * Model.findOneAndUpdate(): Finds a matching document, updates it, and returns it (used for adding comments to articles).

4. Security & Authentication Methods

##### Bcrypt (bcryptjs):

    * bcrypt.hash(password, saltRounds): Generates a secure hash for plain text passwords.

    * bcrypt.compare(plainText, hash): Compares a plain text password with a hashed password in the DB.

##### JWT (jsonwebtoken):

    * jwt.sign(payload, secret, options): Generates a signed token upon successful login.

    * jwt.verify(token, secret): Decodes and verifies the token's validity in protected routes.
---
## Custom Services & Middleware

  * Services (AuthService.js)

  * register(userObj): Business logic to validate a user, hash their password, save them to the DB, and return a sanitized user object.

  * authenticate({ email, password, role }): Business logic to verify user existence, check block status, compare passwords, and generate a JWT.

## Custom Middlewares

  * verifyToken(...allowedRoles): A factory middleware that checks for the presence of an HttpOnly cookie containing a JWT, verifies it, checks if the user's role is permitted, and attaches the decoded payload to req.user.

  * checkUser(req, res, next): Middleware to verify if a user exists, has the 'USER' role, and is actively allowed to perform actions.

  * checkAuthor(req, res, next): Middleware to verify if an author exists, has the 'AUTHOR' role, and is not blocked.

  * Global Error Handler: A custom Express error handling middleware in server.js that catches validation errors, cast errors, MongoDB duplicate key errors (code 11000), and custom application errors.

## API Endpoints Summary

  * Based on the routing and userreq.http file, the following API endpoints are established:

### Common API (/common-api)

(i) POST /login: Authenticates a user and sets an HttpOnly cookie.

(ii) GET /logout: Clears the authentication cookie.

(iii) PUT /change-password: Updates the authenticated user's password.

### User API (/user-api)

(i) POST /users: Registers a new user with the "USER" role.

(ii) GET /articles: Fetches all active articles (Protected: Requires "USER" role).

(iii) PUT /articles: Adds a comment to a specific article (Protected: Requires "USER" role).
