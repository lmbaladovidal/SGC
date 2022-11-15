const express = require('express');
const db = require('./dataBase/models')
const sequelize = db.Sequelize;
const Sucursales = db.Sucursales
const {Op} = require('sequelize')

const app = express();
db.Sucursales.findAll()
    .then((resultado) => {
      const recetas = resultado;
     console.log(resultado)
    })
    .catch((error) => {
      console.log(error);
    });
console.log("Hola Mundo");
app.listen(3002,()=>{
    console.log("Server running on port 3002");
});

