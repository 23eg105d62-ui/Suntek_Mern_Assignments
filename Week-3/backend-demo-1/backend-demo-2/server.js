// import "express and create HTTp server. Assign Port
import exp from 'express';
//import user App 
import { userApp } from './APIs/UserAPI.js';
//
import { productApp } from './APIs/ProductApi.js';
//import 
import { connect } from 'mongoose';

const app = exp()
const port = 4000;


//connect to DB server
async function connectDB() {
    try {

        await connect("mongodb://127.0.0.1:27017/auDB");
        console.log("DB connected successfully");
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    } catch (err) {
        console.error("error in connecting to db", err);
    }
}

connectDB();
app.use(exp.json());
//if path starts with /user-api, forward the request to userApp
app.use('/user-api', userApp);
//-------------PRODUCT API ROUTING------------------------------>
app.use('/product-api', productApp);

//error handling middleware
function errorHandler(err, req, res, next) {
    res.json({ message: "ERROR:: ", reason: err.message })
}
app.use(errorHandler)

