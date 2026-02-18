import React from "react";

const TaskListNumbers = ({ data }) => {
  return (
    <div className="flex flex-wrap mt-4 p-2 justify-between gap-3">

      <div className="bg-purple-800 h-40 w-full sm:w-[48%] lg:w-[24%] rounded-2xl p-4">
        <h1 className="text-2xl sm:text-3xl font-semibold">
          {data.taskCount.newTask}
        </h1>
        <h1 className="text-2xl sm:text-3xl font-semibold">New Task</h1>
      </div>

      <div className="bg-blue-700 h-40 w-full sm:w-[48%] lg:w-[24%] rounded-2xl p-4">
        <h1 className="text-2xl sm:text-3xl font-semibold">
          {data.taskCount.active}
        </h1>
        <h1 className="text-2xl sm:text-3xl font-semibold">Active Tasks</h1>
      </div>

      <div className="bg-green-400 h-40 w-full sm:w-[48%] lg:w-[24%] rounded-2xl p-4">
        <h1 className="text-2xl sm:text-3xl font-semibold">
          {data.taskCount.completed}
        </h1>
        <h1 className="text-2xl sm:text-3xl font-semibold">Completed Tasks</h1>
      </div>

      <div className="bg-red-600 h-40 w-full sm:w-[48%] lg:w-[24%] rounded-2xl p-4">
        <h1 className="text-2xl sm:text-3xl font-semibold">
          {data.taskCount.failed}
        </h1>
        <h1 className="text-2xl sm:text-3xl font-semibold">Failed Tasks</h1>
      </div>

    </div>
  );
};

export default TaskListNumbers;

