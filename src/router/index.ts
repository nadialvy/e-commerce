import express from 'express';

import product from './product';
import employees from './employees';

const router = express.Router();

export default (): express.Router => {
  product(router);
  employees(router);
  return router;
}