let mongoose = require("mongoose")

let Product = require("../models/Product")

let chai = require("chai")
let chaiHttp = require("chai-http")
let server = require("../index")

chai.use(chaiHttp)

// describe( 'Products', () => {
//     beforeEach( ( done ) => {
//         Product.remove( {}, (err) => {
//             done()
//         })
//     })
// })

describe("/GET product", () => {
  it("it should GET all the product", (done) => {
    chai
      .request(server)
      .get("/product")
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a("array")
        res.body.length.should.be.eql(0)
        done()
      })
  })
})
