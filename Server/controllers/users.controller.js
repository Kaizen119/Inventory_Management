const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
// import the model to make queris to the DB
const User = require("../models/users.model")



//Create
module.exports.createNewUser = (requestObj,responseObj) => {
    User.create(requestObj.body)
        .then(newlyCreatedUser => {
            console.log("Server Success")
            responseObj.json(newlyCreatedUser)
        })
        .catch(err => {
            console.log("Server Error")
            responseObj.status(400).json(err)
        });
    
}
