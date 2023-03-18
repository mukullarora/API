const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  EmployeeName: { type: String, required: true },
  Address: { type: String, required: true },
  Age: { type: Number, required: true },
  Department: { type: String, required: true },
  EmployeeStatus: { type: String, required: true },
  EmployeeId: { type: mongoose.Types.ObjectId, required: true, auto: true },
});

const Employee = mongoose.model('Employee', EmployeeSchema);

// CREATE
router.post('/employee', async (req, res) => {
  const employee = new Employee(req.body);
  await employee.save();
  res.send(employee);
});

// READ
router.get('/employee', async (req, res) => {
  const employees = await Employee.find();
  res.send(employees);
});

// UPDATE
router.put('/employee/:id', async (req, res) => {
  const employee = await Employee.findByIdAndUpdate(req.params.id, req.body);
  res.send(employee);
});

// DELETE
router.delete('/employee/:id', async (req, res) => {
  const employee = await Employee.findByIdAndDelete(req.params.id);
  res.send(employee);
});

module.exports = router;
