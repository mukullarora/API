import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const employeeSlice = createSlice({
name: 'employee',
initialState: { employees: [] },
reducers: {
setEmployees(state, action) {
state.employees = action.payload;
},
addEmployee(state, action) {
state.employees.push(action.payload);
},
updateEmployee(state, action) {
const index = state.employees.findIndex(emp => emp.EmployeeId === action.payload.EmployeeId);
if (index !== -1) {
state.employees[index] = action.payload;
}
},
deleteEmployee(state, action) {
state.employees = state.employees.filter(emp => emp.EmployeeId !== action.payload);
}
}
})
