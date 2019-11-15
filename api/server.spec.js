const request = require("supertest");
const server = require("./server");

describe("server", () => {
    test("the db env is testing", () => {
        expect(process.env.DB_ENV).toBe("testing")
    })

    describe("login endpoint", () => {

    })
})