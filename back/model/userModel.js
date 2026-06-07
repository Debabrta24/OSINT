const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        trim:true,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    otp: {
        type: Number,
        default: 0
    },
    isverified: {
        type: Boolea,
        default: false
    }
})
const usermodel = mongoose.model("user", userSchema)
module.exports = usermodel;


