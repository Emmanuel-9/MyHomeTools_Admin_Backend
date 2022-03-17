const orderModel = require("../models/Order")

exports.findAll = (req, res) => {
  try {
    orderModel
      .find()
      .then((orders) => {
        res.status(200).json(orders)
      })
      .catch((err) => {
        res.status(500).send(err.message)
        console.log("error communicating with the DB", err.message)
      })
  } catch (err) {
    res.status(500).send(err.message)
    console.log("", err.message)
  }
}

exports.findOne = (req, res) => {
  try {
    orderModel.findOne({ _id: req.params.id }, (err, order) => {
      if (err) {
        console.log("order with id cant be found - ",err.message)
        res.status(404).send("order with id cant be found")
      } else {
        console.log("seached order : ", order)
        res.status(200).json(order)
      }
    })
  } catch (err) {
    console.log(err.message)
  }
}
