import React, { useContext } from "react";
import { CalculateTaskCount } from "../others/CountFunction";
import { AuthContext } from "../../context/AuthProvider";

const AcceptTask = ({ data }) => {

  const { employees, updateEmployees } = useContext(AuthContext);

  const handleComplete = () => {
    const updatedEmployees = employees.map((emp) => {

      const hasTask = emp.tasks.some(
        (task) => task.taskTitle === data.taskTitle
      );

      if (!hasTask) return emp;

      const updatedTasks = emp.tasks.map((task) => {
        if (task.taskTitle === data.taskTitle) {
          return {
            ...task,
            active: false,
            completed: true,
            newTask: false,
            failed: false,
          };
        }
        return task;
      });

      return {
        ...emp,
        tasks: updatedTasks,
        taskCount: CalculateTaskCount(updatedTasks),
      };
    });

    updateEmployees(updatedEmployees);
  };


  const handleFailed = () => {
    const updatedEmployees = employees.map((emp) => {

      const hasTask = emp.tasks.some(
        (task) => task.taskTitle === data.taskTitle
      );

      if (!hasTask) return emp;

      const updatedTasks = emp.tasks.map((task) => {
        if (task.taskTitle === data.taskTitle) {
          return {
            ...task,
            active: false,
            completed: false,
            newTask: false,
            failed: true,
          };
        }
        return task;
      });

      return {
        ...emp,
        tasks: updatedTasks,
        taskCount: CalculateTaskCount(updatedTasks),
      };
    });

    updateEmployees(updatedEmployees);
  };

  return (
   
  
  <div className="flex-shrink-0 w-full sm:w-[370px]">

    <div className="h-auto sm:h-full p-3 sm:p-5 bg-blue-700 rounded-2xl">

      <div className="flex items-center justify-between">
        <h3 className="bg-red-600 px-3 sm:px-5 py-1.5 sm:py-2 rounded-md text-xs sm:text-base">
          {data.taskCategory}
        </h3>
        <h4 className="text-xs sm:text-sm">{data.taskDate}</h4>
      </div>

      <h1 className="mt-2 sm:mt-5 text-lg sm:text-2xl font-semibold">
        {data.taskTitle}
      </h1>

      <p className="mt-2 sm:mt-4 text-xs sm:text-base">
        {data.taskDescription}
      </p>

      
      <p className="text-xl mt-0.5 sm:text-3xl py-2 px-3  sm:mt-4 rounded w-full text-center">
        In Progress <span className="text-4xl">. . . .</span>
      </p>

     
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 sm:justify-between mt-2 sm:mt-3">
        <button
          onClick={handleComplete}
          className="bg-green-700 text-white font-medium py-1.5 sm:py-2 px-3 text-xs sm:text-sm rounded cursor-pointer"
        >
          Mark as Completed
        </button>

        <button
          onClick={handleFailed}
          className="bg-red-600 font-medium py-1.5 sm:py-2 px-3 text-xs sm:text-sm rounded cursor-pointer"
        >
          Mark as Failed
        </button>
      </div>

    </div>
  </div>
);



  
};

export default AcceptTask;
