import mongoose, { Schema } from 'mongoose';

const CustomerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  orders: [{ type: Schema.Types.ObjectId, ref: 'Order', required: true }],
});

export const CustomerModel = mongoose.model('Customer', CustomerSchema);

export const getCustomers = () => CustomerModel.find();
export const getCustomerById = (id: String) => CustomerModel.findById(id);
export const createCustomer = (values: Record<string, any>) => new CustomerModel(values).save().then((customer) => customer.toObject());
export const updateCustomer = (id: String, values: Record<string, any>) => CustomerModel.findByIdAndUpdate(id, values);
export const deleteCustomer = (id: String) => CustomerModel.findByIdAndDelete(id);
