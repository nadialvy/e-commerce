import express from 'express';

import { getAllProducts, getById, addProduct, updateProduct, removeProduct} from '../controllers/products';

export default (router: express.Router) => {
  router.get('/products', getAllProducts);
  router.get('/products/:id', getById);
  router.post('/products', addProduct);
  router.put('/products/:id', updateProduct);
  router.delete('/products/:id', removeProduct);
}