import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { CalculateTaskCount } from "../others/CountFunction";

const CompleteTask = ({ data }) => {

  const { employees, updateEmployees } = useContext(AuthContext);

  const handleDelete = () => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this completed task?"
    );

    if (!confirmDelete) return;

    const updatedEmployees = employees.map((emp) => {

      const hasTask = emp.tasks.some(
        (task) => task.taskTitle === data.taskTitle
      );

      if (!hasTask) return emp;

      const updatedTasks = emp.tasks.filter(
        (task) => task.taskTitle !== data.taskTitle
      );

      return {
        ...emp,
        tasks: updatedTasks,
        taskCount: CalculateTaskCount(updatedTasks),
      };
    });

    updateEmployees(updatedEmployees);
  };

  return (
    <div className="flex-shrink-0 h-auto sm:h-full w-full sm:w-[370px] p-3 sm:p-5 bg-green-400 rounded-2xl">

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

      <p className="text-2xl sm:text-4xl py-2 px-3 mt-3 sm:mt-4 rounded w-full text-center">
        Completed ✔️
      </p>

      <button
        onClick={handleDelete}
        className="bg-blue-700 text-sm sm:text-xl py-2 px-3 mt-3 sm:mt-4 rounded w-full text-center cursor-pointer"
      >
        Remove
      </button>

    </div>
  );
};

export default CompleteTask;
