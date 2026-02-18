import React, { useContext, useRef, useEffect } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;

    const handleWheel = (e) => {
      if (!element) return;

     
      if (window.innerWidth >= 1024) return;

      const canScrollHorizontally = element.scrollWidth > element.clientWidth;

      if (!canScrollHorizontally) return;

     
      e.preventDefault();
      element.scrollLeft += e.deltaY;
    };

    if (element) {
      element.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (element) {
        element.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded">
      <div ref={ref} className="w-full overflow-x-auto noScroll">
        <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded min-w-[650px]">
          <h3 className="w-1/5 text-lg font-medium">Employee Name</h3>
          <h3 className="w-1/5 text-lg font-medium">New Task</h3>
          <h3 className="w-1/5 text-lg font-medium">Active Task</h3>
          <h3 className="w-1/5 text-lg font-medium">Completed</h3>
          <h3 className="w-1/5 text-lg font-medium">Failed</h3>
        </div>

        <div className="min-w-[650px]">
          {authData.employees.map((emp, idx) => {
            return (
              <div
                key={idx}
                className="bg-gray-800 mb-2 py-2 px-4 border-2 border-emerald-200 flex justify-between rounded"
              >
                <h3 className="text-white w-1/5 text-lg font-medium">
                  {emp.firstName}
                </h3>
                <h3 className="text-purple-400 w-1/5 text-lg font-medium">
                  {emp.taskCount.newTask}
                </h3>
                <h3 className="text-blue-400 w-1/5 text-lg font-medium">
                  {emp.taskCount.active}
                </h3>
                <h3 className="text-green-400 w-1/5 text-lg font-medium">
                  {emp.taskCount.completed}
                </h3>
                <h3 className="text-red-400 w-1/5 text-lg font-medium">
                  {emp.taskCount.failed}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllTask;
