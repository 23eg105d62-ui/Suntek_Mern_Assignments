import exp from 'express';
export const productApp = exp.Router();
import { ProductModel } from '../Models/ProductModel.js';
productApp.get('/products', async (req, res) => {
    //read products from DB
    let itemsList = await ProductModel.find()
    res.status(200).send({ message: "Products list", payload: itemsList })
})
//create product
productApp.post('/products', async (req, res) => {
    //get new user from req.body
    let newProduct = req.body
    console.log(newProduct);
    //create new user document
    let newProductDoc = new ProductModel(newProduct)
    console.log(newProductDoc);
    //save in DB
    await newProductDoc.save()
    res.status(201).json({ message: "New Product Added" })

})

//read product by objectID
productApp.get('/products/:id', async (req, res) => {
    //get ObjectId from req.param
    let objId = req.params.id
    //find user in db
    let prodObj = await ProductModel.findById(objId)//just drop the id as argument and it checks
    //send res
    res.status(200).send({ message: "Product details", payload: prodObj })
})

productApp.put('/products/:id', async (req, res) => {
    //get objectId from url params
    let objId = req.params.id
    //get modified user from req
    let modfifiedProd = req.body
    //make update
    let lastestProd = await ProductModel.findByIdAndUpdate(objId, { $set: { ...modfifiedProd } }, { new: true })//returns modified counts
    res.status(200).json({ message: "Product has been modified successfully", payload: lastestProd })
    //send res
})

//Delete User
productApp.delete('/products/:id', async (req, res) => {
    let objId = req.params.id
    let delObj = req.body
    let deletedprod = await ProductModel.findByIdAndDelete(objId)
    res.status(200).json({ message: "Product has been removed", payload: deletedprod })
})

