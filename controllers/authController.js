const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

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
}
