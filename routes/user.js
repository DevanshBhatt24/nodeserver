const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')

router.route('/addEmployee')
.post( userController.addUser)

router.route('/getData')
.get(userController.getUser)


module.exports = router