import mongoose, { Schema } from 'mongoose';

const OrderDetailSchema = new mongoose.Schema({
  order: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
  detailOrder: [{
    product: { type:Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
  }],
  totalPrice: { type: Number, required: true }
});

export const OrderDetailModel = mongoose.model('OrderDetail', OrderDetailSchema);