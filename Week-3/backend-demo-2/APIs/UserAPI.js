import exp from 'express';
export const userApp = exp.Router();
import { UserModel } from '../Models/UserModel.js';
userApp.get('/users', async (req, res) => {
    //read user from DB
    let userList = await UserModel.find()
    res.status(200).send({ message: "Users list", payload: userList })
})
//create user
userApp.post('/users', async (req, res) => {
    //get new user from req.body
    let newUser = req.body
    console.log(newUser);
    //create new user document
    let newUserDoc = new UserModel(newUser)
    console.log(newUserDoc);
    //save in DB
    await newUserDoc.save()
    res.status(201).json({ message: "New user created" })

})

//read user by objectID
userApp.get('/users/:id', async (req, res) => {
    //get ObjectId from req.param
    let objId = req.params.id
    //find user in db
    let userObj = await UserModel.findById(objId)//just drop the id as argument and it checks
    //send res
    res.status(200).send({ message: "User data", payload: userObj })
})

userApp.put('/users/:id', async (req, res) => {
    //get objectId from url params
    let objId = req.params.id
    //get modified user from req
    let modfifiedUser = req.body
    //make update
    let lastestUser = await UserModel.findByIdAndUpdate(objId, { $set: { ...modfifiedUser } }, { new: true })//returns modified counts
    res.status(200).json({ message: "user modified", payload: lastestUser })
    //send res
})

//Delete User
userApp.delete('/users/:id', async (req, res) => {
    let objId = req.params.id
    let delObj = req.body
    let deleteduser = await UserModel.findByIdAndDelete(objId)
    res.status(200).json({ message: "user removed", payload: deleteduser })
})