import { Schema, model } from 'mongoose'

const prodSch = new Schema({
    prodName: {
        type: String,
        required: [true, "Product Name Required"]
    },
    price: {
        type: Number,
        required: [true, "Product Price Required"]
    },
    brand: {
        type: String,
        required: [true, "Product Brand Required"]
    }

}, {
    strict: "throw",
    timestamps: true,
    versionKey: false
})

export const ProductModel = model("product", prodSch)