const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema(
  {
    user_id: String,
    status: String,
    products: [
      {
        product_id: String,
        quantity: Number,
        price: Number,
        discount: Number,
      },
    ],
  },

  { timestamps: true }
)

module.exports = mongoose.model("order", orderSchema)
