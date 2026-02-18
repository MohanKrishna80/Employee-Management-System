import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import "./index.css";
import EmployeeDashBoard from "./components/DashBoard/EmployeeDashBoard";
import AdminDashBoard from "./components/DashBoard/AdminDashBoard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);

      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (!authData) return alert("Data loading... please try again");

    if (email === "admin@me.com" && password === "123") {
      setUser("admin");

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", data: null }),
      );
      return;
    }

    const employee = authData.employees.find(
      (e) => email === e.email && password === e.password,
    );

    if (employee) {
      setUser("employee");
      setLoggedInUserData(employee);

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: employee }),
      );
    } else {
      alert("Invalid login details");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    setLoggedInUserData(null);
  };

  if (!authData) {
    return <div className="text-white text-center mt-10">Loading...</div>;
  }

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user === "admin" && (
        <AdminDashBoard changeUser={setUser} handleLogout={handleLogout} />
      )}

      {user === "employee" && (
        <div className="p-4 ">

          <EmployeeDashBoard
            changeUser={setUser}
            data={loggedInUserData}
            handleLogout={handleLogout}
          />
        </div>
      )}
    </>
  );
};

export default App;
