import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

const AdminDashBoard = ({changeUser}) => {
  return (
    <div>
      <Header changeUser={changeUser} />
      <div className="p-5">
        <CreateTask />
        <AllTask />
      </div>
    </div>
  );
};

export default AdminDashBoard;
