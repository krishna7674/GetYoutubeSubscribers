var chai = require("chai");
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;
const { describe} = require("mocha");
var server = require("../index");
let chaiHttp = require("chai-http");
chai.use(chaiHttp);

describe("API", () => {

  //testing the "/subscribers" route
  describe("/subscribers GET Subscribers api", () => {
    it("It should return the subscribers array", (done) => {
      chai
        .request(server)
        .get("/subscribers")
        .end((err, response) => {
          response.body.should.be.a("array");
          response.should.have.status(200);
          done();
        });
    });
    it("returns error", (done) => {
      chai
        .request(server)
        .get("/subscriber")
        .end((err, response) => {
          response.should.have.status(404);
          done();
        });
    });
  });

  //testing the "/subscribers/name" route
  describe("GET /subscribers/names", () => {
    it("returns subscribers name and subscribed channel", (done) => {
      chai
        .request(server)
        .get("/subscribers/name")
        .end((err, response) => {
          response.body.should.be.a("array");
          response.should.have.status(200);
          done();
        });
    });
  });

  //testing the "subscribers/:id" route
  //can get subscribers through their ids
  describe("GET /subscribers/:id", () => {
    it("returns subscribers information through their ids", (done) => {
      const id = "642319b9205674f2610da968";
      chai
        .request(server)
        .get("/subscribers/" + id)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("object");
          response.body.should.have.property("_id");
          response.body.should.have.property("name");
          response.body.should.have.property("subscribedChannel");
          done();
        });
    });
    it("fails to get subscribers through their ids", (done) => {
      id = "asgygyjf876";
      chai
        .request(server)
        .get("/subscribers/" + id)
        .end((err, response) => {
          response.should.have.status(400);
          done();
        });
    });
  });

  
});
