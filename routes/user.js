const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')

router.route('/addEmployee')
.post( userController.addUser)

router.route('/getData')
.post(userController.getUser)


module.exports = router