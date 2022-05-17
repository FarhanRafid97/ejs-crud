const { Product } = require('../models');

const getProduct = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).render('product', {
      products,
      msg: req.flash('msg'),
      layout: 'layouts/main',
    });
  } catch (error) {
    console.log(error.message);
  }
};

const detailProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findOne({
      where: {
        id: id,
      },
    });
    res.status(200).render('detail', { product, layout: 'layouts/main' });
  } catch (error) {
    console.log(error.message);
  }
};
const addProduct = async (req, res) => {
  const post = req.body;

  try {
    const newProduct = await Product.create({ ...post });

    req.flash('msg', 'Data Berhasil Di Tambahkan');
    res.status(200).redirect('/form');
  } catch (error) {
    console.log(error.message);
  }
};

const editProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findOne({
      where: {
        id: id,
      },
    });
    res.status(200).render('updateForm', { product, layout: 'layouts/main' });
  } catch (error) {
    console.log(error.message);
  }
};
const editProductAction = async (req, res) => {
  const { id } = req.params;
  const post = req.body;
  try {
    await Product.update(
      {
        ...post,
      },
      {
        where: {
          id: id,
        },
      }
    );

    req.flash('msg', 'Data Berhasil Di Edit');
    res.status(200).redirect('/');
  } catch (error) {
    console.log(error.message);
  }
};
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.destroy({
      where: {
        id: id,
      },
    });
    req.flash('msg', 'Data Berhasil Di hapus');
    res.status(200).redirect('/');
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  addProduct,
  getProduct,
  detailProduct,
  editProduct,
  deleteProduct,
  editProductAction,
};
