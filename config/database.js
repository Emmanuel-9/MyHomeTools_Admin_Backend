const mongoose = require('mongoose')

const { MONGO_URL } = process.env

exports.connect = () => {
    mongoose
    .connect( MONGO_URL, {
    useNewUrlParser: true,
    })

    .then(() => {
        console.log("connected to the main database successfully")
    })
    .catch((error) => {
        console.log("database connection to the main failed")
        console.log(error)
        process.exit(1)
    })

}