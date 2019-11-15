const router = require("express").Router();
const users = require("./auth-model");
const bcrypt = require("bcryptjs");

router.post("/register", validateUser, (req, res) => {
  // implement registration
  const hashpw = bcrypt.hashSync(req.body.password, 10);

  const newUser = {
    username: req.body.username,
    password: hashpw
  };

  users
    .add(newUser)
    .then(user => {
      res.status(201).json({ message: "Account created!", user });
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Could not create new user: " + err.message });
    });
});

router.post("/login", (req, res) => {
  // implement login
});

function validateUser(req, res, next){
  if (!Object.keys(req.body).length) {
    res.status(401).json({ message: "Missing user data" });
  } else if (!req.body.username) {
    res.status(401).json({ message: "Missing required username" });
  } else if (!req.body.password) {
    res.status(401).json({ message: "Missing required password" });
  } else {
    next();
  }
}

module.exports = router;
