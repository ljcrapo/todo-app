import chai from "chai";
import chaiHttp from "chai-http";
import chaiAsPromised from "chai-as-promised";
import server from "../server";
import * as db from "../models";
const expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiAsPromised);
chai.use(chaiHttp);

let request: ChaiHttp.Agent;

describe("/api/todo", function() {
  this.timeout(10000);

  // Create an object to send to the endpoint
  var reqBody = {
    text: "Example todo text"
  };
  
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  this.beforeEach(async function() {
    request = chai.request(server);
    await db.Todo.deleteMany({});
    await db.Todo.insertMany([
      {
        text: "Write Todo App",
      },
      {
        text: "Test Todo App",
      }
    ]);
  });

  it("get should get all todo items", async () => {
    // GET all todo items
    const res = await request.get("/api/todo").send();
    var responseStatus = res.status;
    var responseBody = res.body;

    expect(responseStatus).to.equal(200);
    expect(responseBody)
      .to.be.an("array").of.length(2);
    expect(responseBody[0]).to.include({
        text: "Write Todo App"
    });
    expect(responseBody[1]).to.include({
        text: "Test Todo App"
    });
  });

  it("post should save a todo", async function() {
    // POST the request body to the server
    const res = await request.post("/api/todo").send(reqBody);
    var responseStatus = res.status;
    var responseBody = res.body;

    expect(responseStatus).to.equal(200);

    expect(responseBody)
      .to.be.an("object")
      .that.includes(reqBody);

    const todos = await db.Todo.find();

    expect(todos.length).to.equal(3);
    expect(todos[2].text).to.equal("Example todo text");
  });
});
