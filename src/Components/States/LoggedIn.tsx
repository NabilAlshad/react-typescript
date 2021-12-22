import React, { useState } from "react";

const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLogin}></button>
      <button onClick={handleLogout}></button>
      <p>userr is {isLoggedIn ? "login" : "logout"}</p>
    </div>
  );
};

export default LoggedIn;
