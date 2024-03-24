const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const Token = require("../middleware/AuthController");

function getAllUsers(req, res) {
  User.findAll().then((users) => {
    res.json([{ "Usuário Logado": req.loggedUser.login }, users]);
  });
}

function authenticate(req, res) {
  var login = req.body.login;
  var password = req.body.senha;
  const JWTSecret = Token.JWTToken.JWTSecret;

  User.findOne({
    where: {
      login: login,
      senha: password,
    },
  })
    .then((user) => {
      if (user != undefined) {
        if (user.senha == password) {
          jwt.sign(
            { id: user.id, login: user.login },
            JWTSecret,
            { expiresIn: "48h" },
            (err, token) => {
              if (err) {
                res.status(400);
                res.send("Falha!");
              } else {
                return res.status(200).json({ token: token });
              }
            }
          );
        }
      } else {
        return res.status(400).json({ ERRO: "O usuário não está autenticado" });
      }
    })
    .catch(() => {
      return res.status(400).json({ ERRO: "O usuário não está autenticado" });
    });
}

module.exports = { authenticate, getAllUsers };
