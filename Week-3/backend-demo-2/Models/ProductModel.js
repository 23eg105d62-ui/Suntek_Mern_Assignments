import { Schema, model } from 'mongoose';
//create product schema(product id, name, brand, price)
const productSchema = new Schema({
    prodId: {
        type: Number,//-> schema types are camel case
        required: [true, "Product Id is required"],
        minLength: [3, "Min length should be 3 characters"],// minlength -> string
        maxLength: [5, "Max length exceeded"]

    },
    prodName: {
        type: String,
        required: [true, "Specify Product Name"]

    },
    brand: {
        type: String,
        required: [true, "Specify Product Brand"],
    },
    price: {
        type: Number,
    }

}, {
    strict: "throw",
    timestamps: true
});

//create Product Model using productSchema
export const ProductModel = model("product", productSchema)