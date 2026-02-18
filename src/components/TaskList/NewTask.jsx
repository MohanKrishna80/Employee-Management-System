import React, { useContext } from "react";
import { CalculateTaskCount } from "../others/CountFunction";
import { AuthContext } from "../../context/AuthProvider";

const NewTask = ({ data }) => {

  const { employees, updateEmployees } = useContext(AuthContext);

  const acceptTask = () => {

    const updatedEmployeeStatus = employees.map((emp) => {

      const hasTask = emp.tasks.some(
        (task) => task.taskTitle === data.taskTitle
      );

      if (!hasTask) return emp;

      const updatedTasks = emp.tasks.map((task) => {
        if (task.taskTitle === data.taskTitle) {
          return {
            ...task,
            active: true,
            newTask: false,
            completed: false,
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

    updateEmployees(updatedEmployeeStatus);
  };

  return (
    <div className="flex-shrink-0 h-auto sm:h-full w-full sm:w-[370px] p-3 sm:p-5 bg-purple-600 rounded-2xl">

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

      <button
        onClick={acceptTask}
        className="bg-green-800 mt-3 sm:mt-4 px-3 py-1.5 sm:py-2 text-xs sm:text-sm rounded cursor-pointer w-full text-center"
      >
        Accept Task
      </button>

    </div>
  );
};

export default NewTask;
