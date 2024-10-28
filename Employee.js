// src/components/Employee.js
import React from 'react';

const Employee = ({ employee, onDelete, onEdit }) => {
  return (
    <div className="employee">
      <p><strong>Name:</strong> {employee.name}</p>
      <p><strong>Position:</strong> {employee.position}</p>
      <button onClick={() => onEdit(employee)}>Edit</button>
      <button onClick={() => onDelete(employee.id)}>Delete</button>
    </div>
  );
};

export default Employee;
