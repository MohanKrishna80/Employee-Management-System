import React, { useState, useContext } from "react";
import { CalculateTaskCount } from "./CountFunction";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {

  const { employees, updateEmployees } = useContext(AuthContext);

  const [userTask, setUserTask] = useState({
    taskTitle: "",
    taskDescription: "",
    taskDate: "",
    taskAssignTo: "",
    taskCategory: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      active: false,
      newTask: true,
      completed: false,
      failed: false,
      ...userTask,
    };

    const updatedEmployeeData = employees.map((emp) => {

      if (userTask.taskAssignTo === emp.firstName) {

        const updatedTasks = [...emp.tasks, newTask];

        return {
          ...emp,
          tasks: updatedTasks,
          taskCount: CalculateTaskCount(updatedTasks),
        };
      }

      return emp;
    });

    updateEmployees(updatedEmployeeData); 

    setUserTask({
      taskTitle: "",
      taskDescription: "",
      taskDate: "",
      taskAssignTo: "",
      taskCategory: "",
    });
  };

  return (
  
 <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
  <form
    onSubmit={handleSubmit}
    className="flex flex-col md:flex-row flex-wrap justify-between items-start w-full"
  >
    
    {/* Left Side */}
    <div className="w-full md:w-1/2">

      <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
      <input
        className="text-sm py-1 px-2 w-full md:w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
        type="text"
        name="taskTitle"
        value={userTask.taskTitle}
        onChange={handleChange}
      />

      <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
      <input
        className="text-sm py-1 px-2 w-full md:w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
        type="date"
        name="taskDate"
        value={userTask.taskDate}
        onChange={handleChange}
      />

      <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
      <input
        className="text-sm py-1 px-2 w-full md:w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
        type="text"
        name="taskAssignTo"
        value={userTask.taskAssignTo}
        onChange={handleChange}
      />

      <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
      <input
        className="text-sm py-1 px-2 w-full md:w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
        type="text"
        name="taskCategory"
        value={userTask.taskCategory}
        onChange={handleChange}
      />

    </div>

    {/* Right Side */}
    <div className="w-full md:w-1/2 flex flex-col items-start mt-4 md:mt-0">

      <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
      <textarea
        className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400"
        name="taskDescription"
        value={userTask.taskDescription}
        onChange={handleChange}
      />

      <button className="bg-emerald-500 py-3 cursor-pointer hover:bg-emerald-600 rounded text-sm mt-4 w-full">
        Create Task
      </button>

    </div>

  </form>
</div>

);

  
};

export default CreateTask;
