// src/components/EmployeeForm.js
import React, { useState, useEffect } from 'react';

const EmployeeForm = ({ addEmployee, editEmployee, currentEmployee }) => {
  const [employee, setEmployee] = useState({
    id: null,
    name: '',
    position: ''
  });

  useEffect(() => {
    if (currentEmployee) {
      setEmployee(currentEmployee);
    }
  }, [currentEmployee]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employee.name && employee.position) {
      if (employee.id) {
        editEmployee(employee);
      } else {
        addEmployee(employee);
      }
      setEmployee({ id: null, name: '', position: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{employee.id ? 'Edit Employee' : 'Add Employee'}</h2>
      <input
        type="text"
        placeholder="Name"
        value={employee.name}
        onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Position"
        value={employee.position}
        onChange={(e) => setEmployee({ ...employee, position: e.target.value })}
      />
      <button type="submit" className='update'>{employee.id ? 'Update' : 'Add'} Employee</button>
    </form>
  );
};

export default EmployeeForm;
