import React, { useEffect, useRef, useContext } from "react";
import AcceptTask from "./AcceptedTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import { AuthContext } from "../../context/AuthProvider";

const TaskList = ({ data }) => {
  const { employees } = useContext(AuthContext);

  const ref = useRef(null);

  const currentEmployee =
    employees.find((emp) => emp.email === data?.email) || data;

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      ref.current.scrollLeft += e.deltaY;
    };

    const element = ref.current;

    if (element) {
      element.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (element) {
        element.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <div
      className="noScroll h-[50%] w-full p-2 overflow-x-auto mt-10 py-5 flex items-center justify-start gap-4 flex-nowrap"
      ref={ref}
    >
      {currentEmployee?.tasks?.map((task) => {
        if (task.active) {
          return <AcceptTask key={task.id} data={task} />;
        }

        if (task.newTask) {
          return <NewTask key={task.id} data={task} />;
        }

        if (task.completed) {
          return <CompleteTask key={task.id} data={task} />;
        }

        if (task.failed) {
          return <FailedTask key={task.id} data={task} />;
        }

        return null;
      })}
    </div>
  );
};

export default TaskList;
