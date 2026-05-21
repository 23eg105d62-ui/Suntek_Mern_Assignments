import { Schema, model } from 'mongoose'

/*const cartSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'product', //name of product model
    }
})*/
const cartSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'product', //name of product model
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    }
})

const userSch = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "email  required"],
        unique: [true, "dup user"]

    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
    cart: {
        type: [cartSchema],
    },

})

export const UserModel = model("user", userSch)