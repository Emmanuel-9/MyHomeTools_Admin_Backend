const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

exports.login = async (req, res) => {
    try {
         res.status(200)
    }catch(err) {
        res.status(500).json(err)
    }
}
