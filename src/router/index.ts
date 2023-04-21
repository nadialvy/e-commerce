import express from 'express';

import product from './product';

const router = express.Router();

export default (): express.Router => {
  product(router);
  return router;
}