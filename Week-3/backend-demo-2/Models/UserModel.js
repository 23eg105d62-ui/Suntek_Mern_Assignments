import { Schema, model } from 'mongoose';
//create user schema(username, password, age)
const userSchema = new Schema({
    username: {
        type: String,//-> schema types are camel case
        required: [true, "Username is required"],
        minLength: [6, "Min length should be 6 characters"],// minlength -> string
        maxLength: [8, "Max length exceeded"]

    },
    password: {
        type: String,
        required: [true, "Password is required"],

    },
    age: {
        type: Number,
        required: [true, "Age is required"],
        min: [18, "Age must be above 18"], // min -> number
        max: [25, "Age must be less than 25"]
    }

}, {
    strict: "throw",
    timestamps: true
});

//create User Model using userSchema
export const UserModel = model("user", userSchema)