import React, { createContext, useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";
import { CalculateTaskCount } from "../components/others/CountFunction";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [employees, setEmployees] = useState([]);
  const [admin, setAdmin] = useState(null);

  const [counts, setCounts] = useState({
    active: 0,
    newTask: 0,
    completed: 0,
    failed: 0,
  });

 
  const calculateGlobalCounts = (employees) => {
    let total = {
      active: 0,
      newTask: 0,
      completed: 0,
      failed: 0,
    };

    employees.forEach((emp) => {
      const c = CalculateTaskCount(emp.tasks);
      total.active += c.active;
      total.newTask += c.newTask;
      total.completed += c.completed;
      total.failed += c.failed;
    });

    return total;
  };

  useEffect(() => {
    const data = localStorage.getItem("employees");

    if (!data) {
      setLocalStorage();
    }

    const { employees: empData, admin } = getLocalStorage();

    const updatedEmployees = empData.map((emp) => ({
      ...emp,
      taskCount: CalculateTaskCount(emp.tasks),
    }));

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    setEmployees(updatedEmployees);
    setAdmin(admin);

    setCounts(calculateGlobalCounts(updatedEmployees));

  }, []);

  const updateEmployees = (updatedEmployees) => {

    setEmployees(updatedEmployees); 
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    setCounts(calculateGlobalCounts(updatedEmployees));
  };

  return (
    <AuthContext.Provider
      value={{
        employees,
        admin,
        counts,
        updateEmployees,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
