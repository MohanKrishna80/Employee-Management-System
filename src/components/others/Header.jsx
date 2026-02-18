import React, { useEffect, useState } from "react";

const Header = ({data,changeUser}) => {
  const [userName, setUserName] = useState("");

  useEffect(()=>{

    if (!data) {
      setUserName("Admin");
    } else {
      setUserName(data.firstName);
    }
  },[])

  const logOutUser=()=>{

localStorage.setItem('loggedInUser',"")
changeUser('')

  }
  return (
    <div className="flex items-start justify-between p-10 ">
      <h1 className="text-2xl font-semibold">
        Hello <br />
        <span className="text-3xl font-semibold">{userName} 👋</span>{" "}
      </h1>
      <button onClick={logOutUser} className="bg-red-600 text-white text-lg font-medium px-5 py-2 rounded-sm cursor-pointer">
        Log Out
      </button>
    </div>
  );  
};

export default Header;
