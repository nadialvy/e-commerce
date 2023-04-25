import mongoose, { Schema } from 'mongoose';

const OrderSchema = new mongoose.Schema({
  customer: [{ type: Schema.Types.ObjectId, ref: 'Customer', required: true }],
  employee: [{ type: Schema.Types.ObjectId, ref: 'Employee', required: true }],
  orderDate: { type: Date, required: true },
  requiredToShippedDate: { type: Date, required: true },
  shippedDate: { type: Date },
  shippedVia: { type: String, required: true },
  freight: { type: Number, required: true },
  details: [{ type: Schema.Types.ObjectId, ref: 'OrderDetail', required: true }]
});

export const OrderModel = mongoose.model('Order', OrderSchema);