exports.addUser = async (req, res)=>{
    const { email, username,address, salary, phoneNumber, hireDate} = req.body
    
    const user = new User({email, username,address,phoneNumber,salary,hireDate })
   const res=  await user.save()
    res.status(200).json({
        "message":"User added successful",
        "user":{
            "username":req.user.username,
            "email":req.user.email,   
        },
        "token":req.token
    })
}

exports.getUser = async (req, res)=>{
    try {
        const data = await Employee.find();
        if(product.length==0){
            res.status(404).json(message404);
        }
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json(message500);
    }
   
}

