const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op, Association } = require("sequelize");
const express = require('express');

//Aqui tienen otra forma de llamar a cada uno de los modelos
//const sale = db.Sales;
const Transportista = db.transportistas;

const transportistaController = {
    list: async (req, res) => {
        let Transportista = await Transportista.findAll({

        });
        res.render('./sales/productCart',{products_Detail})
    }
   
}
module.exports = transportistaController;