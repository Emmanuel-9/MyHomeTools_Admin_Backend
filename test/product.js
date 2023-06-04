// const mongoose = require("mongoose")
const Products = require('../models/Product')
const mockproducts = require('./__mock_data__/products.json')

let chai = require("chai")
let chaiHttp = require("chai-http")
let server = require("../app")
// const { createProduct } = require("../controllers/productController")
let should = chai.should()
chai.use(chaiHttp)

describe('Product controller functions', () => {
    beforeAll(() => {
        Products.find = async () => mockproducts;
    });

    describe("/GET all products", () => {
        it("it should GET all the product", (done) => {
            chai
                .request(server)
                .get("/product/")
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a("array")
                    // res.body.length.should.be.eql(0)
                    done()
                })
        })
    })

    describe("/GET product by id", () => {
        it("should GET all the product by id", (done) => {
            chai
                .request(server)
                .get("/product/")
                .query({ id: "1" })
                .end((err, res) => {
                    console.log(res.body)
                    res.should.have.status(200)
                    res.body.should.be.a("array")
                    done()
                })
        })
    })
});