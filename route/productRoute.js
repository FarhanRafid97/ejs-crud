const express = require('express');
const {
  addProduct,
  getProduct,
  editProduct,
  detailProduct,
  editProductAction,
  deleteProduct,
} = require('../controllers/product');

const productRoute = express.Router();

productRoute.get('/', getProduct);
productRoute.get('/form', (req, res) => {
  res.render('form', { layout: 'layouts/main', msg: req.flash('msg') });
});
productRoute.get('/product/edit/:id', editProduct);
productRoute.post('/product', addProduct);
productRoute.get('/product/delete/:id', deleteProduct);
productRoute.get('/product/:id', detailProduct);
productRoute.put('/product/edit/:id', editProductAction);

module.exports = { productRoute };
