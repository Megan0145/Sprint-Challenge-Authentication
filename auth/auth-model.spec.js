const request = require("supertest");
const Users = require("./auth-model");
const db = require("../database/dbConfig");

beforeEach(() => {
    return db("users").truncate()
})

describe("Users model", () => {
    describe("Add user function", () => {
        test("Should add user to db", async () => {
            await Users.add({username: "Test user", password: "1234"})

            const users = await db("users")
            expect(users).toHaveLength(1)
        })
    })
})