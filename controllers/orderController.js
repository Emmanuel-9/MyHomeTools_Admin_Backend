const orderModel = require( '../models/Order' )

exports.findAll = ( req, res ) => {
    try {
        
        orderModel.find().then( ( orders ) => {
            res.status(200).json(orders)
        } ).catch( ( err ) => {
            res.send( err.message )
            console.log( "error communicating with the DB",err.message )
        })
    } catch ( err ) {
        res.send( err.message )
        console.log("", err.message )
    }


}