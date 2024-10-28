// src/components/EmployeeList.js
import React from 'react';
import Employee from './Employee';

const EmployeeList = ({ employees, onDelete, onEdit }) => {
  return (
    <div>
      <h2>Employee List</h2>
      {employees.length > 0 ? (
        employees.map((employee) => (
          <Employee 
            key={employee.id} 
            employee={employee} 
            onDelete={onDelete} 
            onEdit={onEdit} 
          />
        ))
      ) : (
        <p>No employees found.</p>
      )}
    </div>
  );
};

export default EmployeeList;
