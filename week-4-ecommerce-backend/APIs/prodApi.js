import exp from 'express'
import { ProductModel } from '../Models/ProductModel.js'
export const productRoute = exp.Router()


productRoute.post("/products", async (req, res) => {
    let newProduct = req.body
    console.log(newProduct);

    let newProductDoc = new ProductModel(newProduct)
    console.log(newProductDoc);

    await newProductDoc.save()
    res.status(201).json({ message: "New Product Added", product: newProductDoc })
})
