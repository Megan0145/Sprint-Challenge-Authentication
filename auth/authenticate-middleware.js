/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, process.env.SECRET, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "Bad token. " + err.message });
      } else {
        req.decodedToken = decodedToken;
        next();
      }
    });
  } else {
    res
      .status(401)
      .json({ message: "You shall not pass! No credentials provided" });
  }
};
