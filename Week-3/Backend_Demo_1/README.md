###Steps to create backend
1. Generate package.json
        npm init -y -----> initializes backend
npm-node package manager - handles all modules
2. Create HTTP Server
    * Install and import "express" module
            npm install express
    * Import Express module





HTTP REQUEST TYPES(CRUD OPERATIONS)
1. GET - R EAD RESOURCES
2. POST - C REATE A NEW RESOURCE
3. PUT - U PDATE RESOURCE
4. DELETE - D ELETE A RESOURCE
USER API:
    GET    http://127.0.0.1:3000/users
    POST   http://127.0.0.1:3000/users
    PUT    http://127.0.0.1:3000/users/<id>
    DELETE http://127.0.0.1:3000/users/<id>
    http://localhost:3000

Rest api end points - is a url where your API can be accessed to perform specific operations on resources

Rule 1: Use nouns, not verbs
        Good - Using nouns + HTTP Methods
        GET /users
        POST /user
        DELETE /users/123
Rule 2: Use Plurals

Rule 3: Use Lowercase and Hyphens
        GET /users-persons
Status 
1. 200 - successful operation


only JSON type of data should be used to communicate 


Middleware - checks if the requests is from authenticated client or not (acts as a security check b/w req and route)
has the cappability to send response 

JSON has to be parsed ionto js obj and then given to the route



PRODUCT API:
    GET    http://127.0.0.1:3000/products
    POST   http://127.0.0.1:3000/products
    PUT    http://127.0.0.1:3000/products/<id>
    DELETE http://127.0.0.1:3000/products/<id>
    http://localhost:3000