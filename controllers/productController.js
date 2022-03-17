const Product = require("../models/Product")

exports.createProduct = async (req, res) => {
  const newProduct = new Product(req.body)
console.log("product from the frontend is: ", newProduct)
  // if(req.body){
  //   res.send('hello')
  // }

  try {
    const savedProduct = await newProduct.save()
    res.status( 200 ).send( savedProduct )
    console.log("saved product is: ",savedProduct)
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.findAll = (req, res) => {
  Product.find()

    .then((products) => {
      res.status(200).json(products)
    })
    .catch((err) => {
      res.status(500).json({
        message:
          err.message || "an error occcured while retrieving your products",
      })
    })
}

exports.findOne = (req, res) => {
  Product
    .findById(req.params.id)
    .then((products) => {
      if (!products) {
        return res.status(404).json({
          message: `No product found with id ${req.params.id}`,
        })
      }
      res.status(200).json(products)
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        res.status(404).json({
          message: `No product found with id ${req.params.id}`,
        })
      }
      res.status(500).json({
        message:
          err.message ||
          `Some error occurred while finding  the product with id ${req.params.id}`,
      })
    })
}
