const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const cors = require('cors');


app.use(express.json());
app.use(cors());
// methods: 
/**
 * POST: login
 */


const userList = [
    {username: "Johny", password: "Password"}
];

app.post("/login", (req, res)=>{
    // get data from the body
    const {userName, userPassword} = req.body;
    console.log(`userName: ${userName} and userPassword: ${userPassword}`);
    // check if user and password are correct based on userList
    // use find
    const foundUser = userList.find((userItem)=>{return userItem.username ==  userName && userItem.password == userPassword});

    if (foundUser)
    {
        // generate token Bearer
        const userObject = {name: userName};
        const tokenGnrtd = jwt.sign(userObject, process.env.SECRET_KEY);
        res.status(200).json({success: true, token: `Bearer ${tokenGnrtd}`});
    }
    else
    {
        // failed to find user
        res.status(201).send("<h1>user not found</h1>");
    }
});


app.post("/register", (req,res)=>{

})


const PORT_NUMBER=5001;

app.listen(PORT_NUMBER, ()=>{console.log(`Listening on port ${PORT_NUMBER}`)});

