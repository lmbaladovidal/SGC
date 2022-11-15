const express = require('express');
const router = express.Router();

const trasnportistaController = require('../controllers/saleController');
//const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

//router.get('/nuestrasRecetas', nuestrasRecetasController.recetasDetail);
//router.get('/sales/add',authMiddleware, salesController.add);


router.get('/productCart', authMiddleware, trasnportistaController.list);

module.exports = router;
