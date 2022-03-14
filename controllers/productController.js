const Product = require("../models/Product")

exports.createProduct = async (req, res) => {
  const newProduct = new Product(req.body)

  // if(req.body){
  //   res.send('hello')
  // }

  try {
    const savedProduct = await newProduct.save()
    res.status(200).json(savedProduct)
  } catch (err) {
    res.status(500).json(error)
  }
}
