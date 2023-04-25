import mongoose, { Schema } from 'mongoose';

enum EmployeePosition {
  CASHIER = 'cashier',
  SUPERADMIN = 'super admin',
  MANAGER = 'manager'
};

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  position: { type:String, enum: Object.values(EmployeePosition), required: true},
  salary: { type: Number, required: true },
  orders: [{ type: Schema.Types.ObjectId, ref: 'Order', required: true }],
});

export const EmployeeModel = mongoose.model('Employee', EmployeeSchema);
