const mongoose = require("mongoose");

const techyUserSchema =   new mongoose.Schema(
    {
        full_name: {
            type: String,
            require: true
        }, 
        password: {
            type:String,
            require:true
        },
        address: {
            type:String,
            require:true
        },
        phoneNumber: {
            type:Number,
            require:true
        },
        email: {
            type:String,
            required:true
        }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("TechyUsers", techyUserSchema);

module.exports = {User};