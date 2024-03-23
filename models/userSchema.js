const mongoose = require('mongoose')
const Schema = mongoose.Schema
var SchemaTypes = Schema.Types;

const userSchema =new Schema({
    username:{
        type: String,
        unique: true,
        required: true
    },
    email:{
        type:String,
        unique: true,
        required: true
    },
    
    address:{
        type:String,
        required: true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    salary:{
        type:SchemaTypes.Decimal128,
        required:true
    },
    hireDate:{
        type: Date
    },
    tokens:[{
        type:String
    }],

})

const User = mongoose.model('Employee', userSchema)
module.exports = User