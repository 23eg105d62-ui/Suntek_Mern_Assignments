//create http server
//Import Express module
import exp from 'express';
import { userApp } from './ap/UserApi.js';
import { productApp } from './ap/ProductApi.js';



//create server
const app = exp()
//Assign port number
app.listen(3000, () => console.log('HTTP server listening in port 3000'))
//body parser middleware
app.use(exp.json())


//forward request to user App when ppath starts with /user-api
app.use('/user-api', userApp);
//forward request to product App when ppath starts with /product-api
app.use('/prod-api', productApp);
