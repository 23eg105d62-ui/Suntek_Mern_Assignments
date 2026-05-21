//create http server
import exp from 'express'
import { connect } from 'mongoose'
import { userRoute } from './APIs/userApi.js'
import { productRoute } from "./APIs/prodApi.js";
const app = exp();
const port = 8000;
//connect to mongodb database
async function connectToDB() {
    try {
        await connect("mongodb://localhost:27017/ecommDB")
        console.log("Connections Successful")
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    } catch (err) {
        console.error("error in connecting to db", err);
    }
}

connectToDB();

//use body parser middleware
app.use(exp.json())
app.use("/user-api", userRoute)
app.use("/product-api", productRoute)
//forward req to specific 
function errorHandler(err, req, res, next) {
    res.json({ message: "ERROR:: ", reason: err.message })
}
app.use(errorHandler)
//test route
