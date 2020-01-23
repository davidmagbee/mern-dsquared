const should = require("chai").should();
const expect = require("chai").expect;
const supertest = require("supertest");
const api = supertest("http://localhost:5000");

describe("GET /task", () => {
    before(done => {
        api
            .post('/task')
            .set("Accept", "application/json")
            .send({
                title: "test 1",
                complete: false
            })
            .end(done)
    })
    it("should return 200 response", done => {
        api
            .get('/task')
            .set("Accept", "application/json")
            .expect(200, done)
    })

    it("should return an array of objects", done => {
        api 
            .get('/task')
            .set('Accept', "application/json")
            .end((err, res) => {
                if(err) throw err
                expect(res.body).to.be.an("array")
                done()
            })
    })

    it("should return an array of objects that have the following: '_id', 'title', 'complete'", done => {
        api
            .get('/task')
            .set('Accept', 'application/json')
            .end(((err, res) => {
                if(err) throw err
                expect(res.body[0]).to.have.property("_id")
                expect(res.body[0]).to.have.property("title")
                expect(res.body[0]).to.have.property("complete")
                done()
            }))
    })
})

describe("POST /task", () => {
    before(done => {
        api
            .post('/task')
            .set("Accept", "application/json")
            .send({
                title: "test 1",
                complete: false
            })
            .end(done)
    })

    it("Should add a task to the task collection and return the task", done => {
        api
            .get('/task')
            .set("Accept", 'application')
            .end((err, res) => {
                expect(res.body[res.body.length - 1]).to.include({
                    _id: res.body[res.body.length - 1]._id,
                    title: "test 1",
                    complete: false,
                    __v: res.body[res.body.length - 1].__v
                })
                done()
            })
    })
})

describe("PUT /task/:id", () => {
    it("Should return the updated object")
})