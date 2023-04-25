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

export const getOrderDetails = () => OrderDetailModel.find();
export const getOrderDetailById = (id: String) => OrderDetailModel.findById(id);
// export const createOrderDetail = (values: Record<string, any>) => new OrderDetailModel(values).save().then((orderDetail) => orderDetail.toObject()); //this should be automatic
export const updateOrderDetail = (id: String, values: Record<string, any>) => OrderDetailModel.findByIdAndUpdate(id, values);
export const deleteOrderDetail = (id: String) => OrderDetailModel.findByIdAndDelete(id);
