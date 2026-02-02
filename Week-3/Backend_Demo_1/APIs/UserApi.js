//create a custom middlleware
function middleware1(req, res, next) {
    console.log("Middleware 1 executed");
    //send res
    res.json({ message: "response from middleware" });
    next();
}
function middleware2(req, res, next) {
    console.log("Middleware 2 executed");
    //send res
    res.json({ message: "response from middleware" });
    next();
}
//to execute for every incoming request
//app.use(middleware1)
//app.use(middleware2)

//create  api (req handlers-routes)
//test local in-memory Data
import exp from 'express';
export const userApp = exp.Router();
let users = [];

//GET   req handling route
userApp.get('/users', (req, res) => {
    //send users data as res
    res.status(200).json({ message: "All users", payload: users })// good practice to use message and payload

})
//POST  req handling route
userApp.post('/users', (req, res) => {
    //get user resource from req
    let newUser = req.body;
    console.log("New User", newUser);
    users.push(newUser);
    res.status(201).json({ message: "User created" })


})
//PUT   req handling route
userApp.put('/users', (req, res) => {

    //get modified user from req
    let modifiedUser = req.body;
    //console.log("Modified User", modifiedUser);
    //find the user with id exists in array
    let usr = users.findIndex(usrObj => usrObj.id == modifiedUser.id);
    //if user not found send  res as user not found
    if (usr === -1) {
        return res.status(404).json({ message: "User not found" })
    }
    //if user found, then modify the user
    let delUsr = users.splice(usr, 1, modifiedUser);
    //send res as "user modified"
    res.status(200).json({ message: "User modified" })
})

// read user by ID
userApp.get('/users/:id', (req, res) => {
    //read id from req params
    //console.log(req.params); //{id :100}
    let usrid = Number(req.params.id) //{id :100}
    //read user by this id
    let usr = users.find(usrObj => usrObj.id === usrid);
    if (!usr) {
        return res.status(404).json({ message: "User not found" })
    }
    //send the res
    return res.status(200).json({ message: "User found", payload: usr })

})
//get id from req params
//DELETE req handling route
userApp.delete('/users/:id', (req, res) => {
    let usrid = Number(req.params.id);//-----> without the Number() it is treated as string but in the req it is sent as integer therefore always use proper format
    //find the user with id exists in array
    let usr = users.findIndex(usrObj => usrObj.id == usrid);
    //if user not found send  res as user not found
    if (usr === -1) {
        return res.status(404).json({ message: "User not found" })
    }
    //if user found, then delete the user
    let delUsr = users.splice(usr, 1);
    //console.log(delUsr);
    //send res as "user deleted"
    res.status(200).json({ message: "User deleted", payload: delUsr })

})