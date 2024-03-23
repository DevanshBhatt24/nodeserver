const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')

router.route('/addEmployee')
.post(genHash, userController.addUser)

router.route('/getData')
.post(checkPass, userController.getUser)


module.exports = router