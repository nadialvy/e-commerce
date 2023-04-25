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

export const getOrders = () => OrderModel.find();
export const getOrderrById = (id: String) => OrderModel.findById(id);
export const updateOrder = (id: String, values: Record<string, any>) => OrderModel.findByIdAndUpdate(id, values);
export const deleteOrder = (id: String) => OrderModel.findByIdAndDelete(id);

// this should be automatically create order detail too, but we can do it later
export const createOrder = (values: Record<string, any>) => new OrderModel(values).save().then((order) => order.toObject()); 
