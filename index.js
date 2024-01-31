const express = require('express');
const appRouter = require('./app');
const app = express()
const port= process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(appRouter)

app.listen(port,"0.0.0.0" ,()=>console.log('Server has started on port:',port))

