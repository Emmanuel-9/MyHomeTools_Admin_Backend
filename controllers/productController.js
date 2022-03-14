<<<<<<< HEAD
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body

		if (!(email && password)) {
			res.status(400).send("All inputs are required to proceed")
		}

        const user = await UserModel.findOne({ email })

		if (user.isAdmin = true && (await bcrypt.compare(password, user.password))) {
			const token = jwt.sign(
				// { user_id: user._id, email },
				// process.env.TOKEN_KEY,
				{
					expiresIn: "2h",
				}
			)

			user.token = token

			res.status(201).json(user)
		}
		res.status(400).send({ message: "Invalid Credentials" })
	 
         
    }catch(err) {
        res.status(500).json(err)
    }
=======
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
>>>>>>> 1966cf1057c5a6cefb5c198745aa1e7058fb90d6
}
