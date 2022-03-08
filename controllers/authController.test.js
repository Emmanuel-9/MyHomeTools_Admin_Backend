const request = require('supertest')
const authController = require( './authController' )

describe( 'POST /auth/login', () => {
    test( 'it should respond with user object and token', () => {
        const response = await request(authController)
    })
})