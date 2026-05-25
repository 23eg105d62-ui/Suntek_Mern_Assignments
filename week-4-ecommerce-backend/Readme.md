# E-commerce App Backend

This document outlines the architecture, libraries, routing methods, and custom business logic utilized across the Node.js/Express backend for the e-commerce application. It handles user authentication, product management, and shopping cart operations.

## Tech Stack & Libraries Used

1. Express (express): The core web framework used for routing API endpoints and handling HTTP requests.

2. Mongoose (mongoose): An Object Data Modeling (ODM) library used to enforce schemas for Users and Products in MongoDB.

3. Bcrypt.js (bcryptjs): Used for cryptographic hashing of user passwords before saving them to the database.

4. JSON Web Token (jsonwebtoken): Used for generating secure, stateless authentication tokens.

## Database Models

1. User Model (UserModel.js)

* Stores user credentials and shopping cart data.

* Fields:

    name, email (unique), password.

    cart: An array of sub-documents mapping a product (MongoDB ObjectId reference) to a quantity (defaulting to 1).

2. Product Model (ProductModel.js)

* Stores standard product catalog data.

* Fields:

    prodName, price, brand.

* Operates under strict: "throw" to ensure invalid data throws an error rather than being silently dropped.

## Core Business Logic & Implementation

* Authentication Flow

* Registration: Passwords are mathematically hashed using bcryptjs with 12 salt rounds before being stored.

* Login: Compares the plain-text password with the database hash. If valid, generates a jsonwebtoken valid for 30 seconds (for testing).

* Session Management: The JWT is issued to the client securely via an HttpOnly Cookie (res.cookie()). This prevents cross-site scripting (XSS) attacks from accessing the token.

1. Cart Management Logic

  * The backend handles adding items to the user's cart dynamically:

  * It validates both the User ID and Product ID.

  * It loops through the user's existing cart array using .equals() to compare ObjectIds securely.

  * Increment or Add: If the product is already in the cart, it increments the quantity. If it's a new product, it pushes a new object into the cart array with a quantity of 1.

  * Data Population: Uses Mongoose's .populate("cart.product", "prodName price") to replace product ObjectIds with actual product data before returning the updated cart to the client.

## API Endpoints Summary

* User & Authentication API (/users, /auth)

(i) POST /users: Registers a new user and hashes their password.

(ii) POST /auth: Authenticates a user and sets an HttpOnly token cookie.

(iii) PUT /users/:id: Updates basic user profile details.

(iv) GET /users/:uid: Retrieves user details, automatically populating their cart with product names and prices.

(v) GET /test: A protected test route used to verify JWT authentication.

* Cart API (/user-cart)

(i) PUT /user-cart/user-id/:uid/product-id/:pid: Adds a product to the user's cart. Automatically increments the quantity if the product already exists in the cart.

* Product API (/products)

(i) POST /products: Adds a new product to the catalog database.

## Custom Middlewares

* verifyToken(req, res, next): Acts as a gatekeeper for protected routes.

* It intercepts incoming requests and extracts the token from req.cookies.

* It decodes and verifies the token using a secret key.

* If the token is missing or invalid, it rejects the request with a 401 Unauthorized status; otherwise, it forwards the request using next().
