import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { CalculateTaskCount } from "../others/CountFunction";

const FailedTask = ({ data }) => {
  const { employees, updateEmployees } = useContext(AuthContext);

  const handleRetry = () => {
    const confirmRetry = window.confirm(
      "This task will be moved back to active status. Do you want to continue?"
    );

    if (!confirmRetry) return;

    const updatedEmployees = employees.map((emp) => {
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

    updateEmployees(updatedEmployees);
  };

  return (
    <div className="flex-shrink-0 h-auto sm:h-full w-full sm:w-[370px] p-3 sm:p-5 bg-red-600 rounded-2xl">

      <div className="flex items-center justify-between">
        <h3 className="bg-white text-black px-3 sm:px-5 py-1.5 sm:py-2 rounded-md text-xs sm:text-base">
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

      <p className="text-2xl sm:text-4xl px-3 py-2 mt-3 sm:mt-4 w-full text-center rounded">
        Failed ❎👎
      </p>

      <button
        onClick={handleRetry}
        className="bg-white text-black cursor-pointer font-medium text-sm sm:text-xl px-3 py-2 mt-3 sm:mt-4 w-full text-center rounded"
      >
        Retry
      </button>

    </div>
  );
};

export default FailedTask;
