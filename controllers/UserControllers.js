const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");

// router.get("/users", (req, res) => {
//   User.findAll({ raw: true }).then((users) => {
//     res.json(users);
//   });
// });

// router.post("/authenticate", (req, res) => {
//   //Autenticar com JWT
//   var login = req.body.login;
//   var password = req.body.senha;
//   var autenticado;

//   User.findOne({
//     where: {
//       login: login,
//     },
//   }).then(user => {
//     if(user != undefined){
//         if(user.senha == password) {
//             autenticado = true;
//             res.json({user: user , autenticado: autenticado})
//         } else {
//             autenticado = false;
//             res.json({user: user, autenticado: autenticado})
//         } 
//     } else {
//         autenticado = false;
//         res.json({user: user, autenticado: autenticado})
//     }
//   }).catch((err) => {
//     res.send(err)
//   })
// });


    function authenticate (req, res) {
        var login = req.body.login;
       var password = req.body.senha;
       var autenticado;
    
       User.findOne({
         where: {
           login: login,
         },
       }).then(user => {
         if(user != undefined){
             if(user.senha == password) {
                 autenticado = true;
                 res.json({user: user , autenticado: autenticado})
             } else {
                 autenticado = false;
                 res.json({user: user, autenticado: autenticado})
             } 
         } else {
             autenticado = false;
             res.json({user: user, autenticado: autenticado})
         }
       }).catch((err) => {
         res.send(err)
    })
  }




module.exports = { authenticate };
