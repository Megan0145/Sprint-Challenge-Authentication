const db = require("../database/dbConfig");

module.exports = {
  findById,
  add
};

function add(user) {
  return db("users")
    .insert(user)
    .then(ids => {
      return findById(ids[0]);
    });
}

function findById(id) {
  return db("users").where({ id });
}
