import express from 'express';

import { getEmployees, getEmployeeById, createEmployee, updateEmployeeById, deleteEmployeeById } from '../db/employees';

export const getAllEmployees = async (req: express.Request, res: express.Response) => {
  try {
    const employees = await getEmployees();
    return res.status(200).json({
      message: "Success",
      data: employees
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Internal Server Error'
    });
  }
}

export const getById = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        message: "Id is required"
      });
    }

    const employee = await getEmployeeById(id);
    if (employee) {
      return res.status(200).json({
        message: "Success",
        data: employee
      });
    }

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error"
    })
  }
}

export const addEmployee = async (req: express.Request, res: express.Response) => {
  try {
    const { name, email, position, salary } = req.body;
    if (!name || !email || !position || !salary) {
      return res.status(400).json({
        message: "Name, email, position and salary are required",
      });
    }

    const employee = await createEmployee({
      name, email, position, salary
    });

    if (employee) {
      return res.status(200).json({
        message: "Success",
        data: employee
      });
    }

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Internal Server Error'
    })
  }
}

export const updateEmployee = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const { name, email, position, salary } = req.body;
    if (!name || !email || !position || !salary) {
      return res.status(400).json({
        message: "Name, email, position and salary are required",
      });
    }

    const employee = await updateEmployeeById(id, { name, email, position, salary });
    if (employee) {
      return res.status(200).json({
        message: "Success",
        data: employee
      });
    }

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Internal Server Error'
    });
  }
}

export const deleteEmployee = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;

    const employee = await deleteEmployeeById(id);
    if (employee) {
      return res.status(200).json({
        message: "Success",
        data: employee
      })
    }

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Internal Server Error'
    });
  }
}