const { Router } = require('express')

const LoginController = require('./app/controllers/LoginController')

const router = Router()

router.get('/login', LoginController.index)


module.exports = router
