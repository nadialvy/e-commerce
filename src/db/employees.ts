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
});

export const EmployeeModel = mongoose.model('Employee', EmployeeSchema);

export const getEmployees = () => EmployeeModel.find();
export const getEmployeeById = (id: String) => EmployeeModel.findById(id);
export const createEmployee = (values: Record<string, any>) => new EmployeeModel(values).save().then((employee) => employee.toObject());
export const updateEmployeeById = (id: String, values: Record<string, any>) => EmployeeModel.findByIdAndUpdate(id, values);
export const deleteEmployeeById = (id: String) => EmployeeModel.findByIdAndDelete(id);

