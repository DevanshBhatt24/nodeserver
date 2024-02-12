if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express')
const app = express()
const port = process.env.PORT || 8000  
const path = require('path')

const session = require('express-session')
const bcrypt = require('bcrypt')
const cookie = require('cookie-parser')

const mongoose = require('mongoose')
const {dbConfig} = require('./config/dbconfig')

// Connecting to the database
const dbURL = dbConfig
// process.env.DB_URL ||
mongoose.connect(dbURL)
.then(()=>{
    console.log('Connected to the database')
})
.catch(err=>{
    console.log(err)
})


// Importing routes
const user = require('./routes/user')


// Setting up session
app.use(session({
    secret: 'secretcode',
    saveUninitialized: false,
    resave: false,
    cookie:{
        httpOnly:false,
        expires: Date.now() + 1000*60*60*24*4,
        maxAge: 1000*60*60*24*4
    }
}))

app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookie())

app.get('/example', (req, res)=>{
    res.status(200).json({name: "Harhsit"})
})

// Routes
app.use('/user', user)

app.get('/', (req, res)=>{
    res.send('Hello hi')
}) 

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`)
})