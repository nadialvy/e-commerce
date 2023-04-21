import express from 'express';

import { getProducts, getProductById, createProduct, updateProductById, deleteProductById } from '../db/products';

export const getAllProducts = async (req: express.Request, res: express.Response) => {
  try {
    const products = await getProducts();
    return res.status(200).json({
      message: "Success",
      data: products
    })

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
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

    const product = await getProductById(id);
    if (product) {
      return res.status(200).json({
        message: "Success",
        data: product
      });
    }

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
}

export const addProduct = async (req: express.Request, res: express.Response) => {
  try {
    const { name, description, price } = req.body;

    if (!name || !description || !price) {
      return res.status(400).json({
        message: "Name, description and price are required",
      });
    }

    const product = await createProduct({
      name,
      description,
      price
    });

    return res.status(201).json({
      message: "Success",
      data: product
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
}

export const updateProduct = async (req: express.Request, res: express.Response) => {
  try{
    const { id } = req.params;
    const existingProduct = await getProductById(id);

    if(!existingProduct){
      return res.status(400).json({
        message: `There is no product with id ${id}, try again`
      });
    }

    const { name, description, price } = req.body;

    if (!name || !description || !price) {
      return res.status(400).json({
        message: "Name, description and price are required",
      });
    }

    const update = await updateProductById(id, {
      name,
      description,
      price
    })

    const updatedProduct = await getProductById(id);

    if(update){
      return res.status(200).json({
        message: "Success",
        data: updatedProduct
      });
    }

  }catch (error){
    console.log(error);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
}

export const removeProduct = async (req: express.Request, res: express.Response) => {
  try{
    const { id } = req.params;
    const existingProduct = await getProductById(id);

    if(!existingProduct){
      return res.status(400).json({
        message: `There is no product with id ${id}, try again`
      });
    }

    const remove = await deleteProductById(id);
    if(remove){
      return res.status(200).json({
        message: "Success delete product"
      });
    }

  }catch (error){
    console.log(error);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
}