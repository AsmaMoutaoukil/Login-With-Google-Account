const express = require('express')
const Router = express.Router()
const{ login }= require("../../controllers/auth/login");

Router.post('/api/v1/auth/google', login)
module.exports = Router