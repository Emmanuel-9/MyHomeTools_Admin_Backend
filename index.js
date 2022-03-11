const express = require( 'express' );
const app = express();


app.get( '/', ( req, res ) => {
    res.send("welcome")
})

app.listen( 5002, () => {
    console.log( 'listening on port 5002')
})