import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEmployees } from './actions';

const EmployeeList = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const employees = useSelector(state => state.employees);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleEmployeeClick = employee => {
    setSelectedEmployee(employee);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee Name</th>
            <th>Address</th>
            <th>Age</th>
            <th>Department</th>
            <th>Employee Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.EmployeeId} onClick={() => handleEmployeeClick(employee)}>
              <td>{employee.EmployeeId}</td>
              <td>{employee.EmployeeName}</td>
              <td>{employee.Address}</td>
              <td>{employee.Age}</td>
              <td>{employee.Department}</td>
              <td>{employee.EmployeeStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedEmployee && (
        <div className="modal">
          <h2>{selectedEmployee.EmployeeName}</h2>
          <p>{selectedEmployee.Address}</p>
          <p>{selectedEmployee.Department}</p>
          <p>{selectedEmployee.EmployeeStatus}</p>
          <p>Location: ({selectedEmployee.Location.lat}, {selectedEmployee.Location.lng})</p>
          {/* Implement map here */}
        </div>
      )}
    </>
  );
};

export default EmployeeList;
