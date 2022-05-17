const express = require('express');
const {
  addProduct,
  getProduct,
  editProductData,
  detailProduct,
  editProductAction,
  deleteProduct,
} = require('../controllers/product');

const productRoute = express.Router();

productRoute.get('/', getProduct);

productRoute.get('/form', (req, res) => {
  res.render('form', { layout: 'layouts/main', msg: req.flash('msg') });
});

productRoute.post('/product', addProduct);
productRoute.get('/product/edit/:id', editProductData);
productRoute.get('/product/delete/:id', deleteProduct);
productRoute.put('/product/edit/:id', editProductAction);
productRoute.get('/product/:id', detailProduct);

module.exports = { productRoute };
