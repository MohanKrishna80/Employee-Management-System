import React, { useContext } from "react";
import Header from "../others/Header";
import TaskListNumbers from "../others/TaskListNumbers";
import TaskList from "../TaskList/TaskList";
import { AuthContext } from "../../context/AuthProvider";

const EmployeeDashBoard = ({ data, changeUser }) => {

  const { employees } = useContext(AuthContext);

  const currentEmployee =
    employees.find(emp => emp.email === data?.email) || data;

  if (!currentEmployee) return null;

  return (
    <div className="bg-[#1c1c1c] rounded min-h-screen w-full p-3 sm:p-5 md:p-7">

     
      <Header data={currentEmployee} changeUser={changeUser} />

      
      <div className="mt-6">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 border-b border-gray-600 pb-2">
          Task Status
        </h1>

        <TaskListNumbers data={currentEmployee} />
      </div>

      
      <div className="mt-8">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 border-b border-gray-600 pb-2">
           Task List
        </h1>

        <TaskList data={currentEmployee} />
      </div>

    </div>
  );
};

export default EmployeeDashBoard;

