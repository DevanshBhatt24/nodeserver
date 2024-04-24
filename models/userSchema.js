const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userSchema =new Schema({
    username:{
        type: String,
     
        required: true
    },
    email:{
        type:String,
        unique: true,
        required: true
    },
    
    phoneNumber:{
        type:String,
        unique:true,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
   
    hireDate:{
        type: String,
        required:true

    },
    salary:{
        type:String,
        required:true
    },
    isActive:{
        type:String,
        required:true
    }

})

const User = mongoose.model('Employee', userSchema)
module.exports = User