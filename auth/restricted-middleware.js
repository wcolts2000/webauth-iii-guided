const jwt = require("jsonwebtoken");

const secrets = require("../config/secrets");

module.exports = (req, res, next) => {
  // tokens are commonly sent as the authorization header
  const token = req.headers.authorization;

  if (token) {
    // is it valid
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if (err) {
        // the token is not valid
        res.status(401).json({ you: "can't touch this!" });
      } else {
        // the token is valid and was decoded
        req.decodedJwt = decodedToken; // make the token available to the rest of the api
        console.log("Decoded token: ", req.decodedJwt);
        next();
      }
    });
  } else {
    // no token? bounced!!!
    res.status(401).json({ you: "shall not pass!" });
  }
};

const arr = [];
