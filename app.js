const express = require("express")
const appRouter=express.Router()

appRouter.get('/',(req,res)=>{
  res.status(200).json('<h1>Hello</h1>')
})

appRouter.post('/location', (req,res)=>{
const data =req.body
    console.log(data)
  if(!data)
    return res.status(400).json({status:"failed"})

    return res.status(200).json({status:"recieved"})  
    
})
appRouter.post('/logs', (req,res)=>{
  const data =req.body
      console.log(data)
    if(!data)
      return res.status(400).json({status:"failed"})
  
      return res.status(200).json({status:"recieved"})  
      
  })
module.exports=appRouter