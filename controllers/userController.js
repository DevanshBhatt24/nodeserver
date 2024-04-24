const User = require('../models/userSchema')
exports.addUser = async (req, res)=>{
    const { username,email,address,phoneNumber,designation, hireDate,salary} = req.body
    
    const user = new User({username,email, address,phoneNumber,designation,hireDate,salary })
   const response=  await user.save()
   console.log(response)
    res.status(200).json({
        "message":"User added successful",
           "id" :response._id,
        "token":req.token
    })
    res.status(404).json({
        "message":message404,
    })
}

exports.getUser = async (req, res)=>{
    try {
        const data = await User.find();
        if(data.length==0){
            res.status(404).json(message404);
        }
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json(message500);
    }
   
}

