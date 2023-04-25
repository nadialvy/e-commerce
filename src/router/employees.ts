import express from 'express';

import { getAllEmployees, getById, addEmployee, updateEmployee, deleteEmployee } from './../controllers/employees';

export default (router: express.Router) => {
  router.get('/employees', getAllEmployees);
  router.get('/employee/:id', getById);
  router.post('/employee', addEmployee);
  router.put('/employee/:id', updateEmployee);
  router.delete('/employee/:id', deleteEmployee);
}
