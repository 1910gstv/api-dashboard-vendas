const jwt = require("jsonwebtoken");
const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());

const JWTToken = {
  JWTSecret: "147258369",
};

const auth = (req, res, next) => {
  const authToken = req.headers["authorization"];
  if (authToken != undefined) {
    const bearer = authToken.split(" ");
    var token = bearer[1];

    jwt.verify(token, JWTToken.JWTSecret, (err, data) => {
      if (err) {
        res.status(401).json({ err: err });
      } else {
        req.token = token;
        req.loggedUser = { id: data.id, login: data.login };
        next();
      }
    });
  } else {
    res.status(401).json({ err: "Token inválido" });
  }
};

module.exports = { JWTToken, auth };
