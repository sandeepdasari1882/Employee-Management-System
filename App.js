// src/App.js
import React, { useState, useEffect } from 'react';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import { employeeService } from './services/employeeService';
import './styles.css';

function App() {
  const [employees, setEmployees] = useState([]);
  const [currentEmployee, setCurrentEmployee] = useState(null);

  useEffect(() => {
    setEmployees(employeeService.getAllEmployees());
  }, []);

  const addEmployee = (employee) => {
    employee.id = Date.now();
    const updatedEmployees = [...employees, employee];
    setEmployees(updatedEmployees);
    employeeService.saveEmployees(updatedEmployees);
  };

  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter(emp => emp.id !== id);
    setEmployees(updatedEmployees);
    employeeService.saveEmployees(updatedEmployees);
  };

  const editEmployee = (employee) => {
    const updatedEmployees = employees.map(emp => (emp.id === employee.id ? employee : emp));
    setEmployees(updatedEmployees);
    setCurrentEmployee(null);
    employeeService.saveEmployees(updatedEmployees);
  };

  const handleEditClick = (employee) => {
    setCurrentEmployee(employee);
  };

  return (
    <div className="App">
      <h1>Employee Management System</h1>
      <EmployeeForm
        addEmployee={addEmployee}
        editEmployee={editEmployee}
        currentEmployee={currentEmployee}
      />
      <EmployeeList
        employees={employees}
        onDelete={deleteEmployee}
        onEdit={handleEditClick}
      />
    </div>
  );
}

export default App;
