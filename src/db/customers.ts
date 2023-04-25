import mongoose, { Schema } from 'mongoose';

const CustomerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  orders: [{ type: Schema.Types.ObjectId, ref: 'Order', required: true }],
});

export const CustomerModel = mongoose.model('Customer', CustomerSchema);
