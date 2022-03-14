const express = require('express')
const router = express.Router()

const productController = require('../controllers/productController')

router.post("/", productController.createProduct)
router.get("/", productController.findAll)


module.exports = router 