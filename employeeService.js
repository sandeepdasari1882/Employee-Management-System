// src/services/employeeService.js
export const employeeService = {
    getAllEmployees() {
      return JSON.parse(localStorage.getItem('employees')) || [];
    },
    saveEmployees(employees) {
      localStorage.setItem('employees', JSON.stringify(employees));
    },
  };
  