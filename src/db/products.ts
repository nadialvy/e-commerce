import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

export const ProductModel = mongoose.model('Product', ProductSchema);

export const getProducts = () => ProductModel.find();
export const getProductById = (id: string) => ProductModel.findById(id);
export const createProduct = (values: Record<string, any>) => new ProductModel(values).save().then((product) => product.toObject());
export const updateProductById = (id: string, values: Record<string, any>) => ProductModel.findByIdAndUpdate(id, values);
export const deleteProductById = (id: string) => ProductModel.findByIdAndDelete(id);
