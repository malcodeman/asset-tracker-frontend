import { ADD_EMPLOYEE_REQUEST, RESET_EMPLOYEES } from "./employeesActionTypes";

function addEmployee(payload, meta) {
  return {
    payload,
    meta,
    type: ADD_EMPLOYEE_REQUEST,
  };
}

function resetEmployees() {
  return {
    type: RESET_EMPLOYEES,
  };
}

export { addEmployee, resetEmployees };
