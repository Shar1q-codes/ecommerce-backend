const express = require('express')

const dataController = require("../Controllers/Data")

const dataRouter = express.Router()

dataRouter.route('/products')

.get(dataController.apiController)

module.exports = dataRouter