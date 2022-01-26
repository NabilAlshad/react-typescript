import React, { useState } from "react";
type authUser = {
  name: string;
  email: string;
};
const User = () => {
  const [user, setUser] = useState<authUser | null>({} as authUser);
  const handleLogin = () => {
    setUser({
      name: "nabil",
      email: "nabil@gmail.com",
    });
  };
  const handleLogout = () => {
    setUser({
      name: "",
      email: "",
    });
  };
  return (
    <div>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>
      {/* if the user name exist  */}
      <p>{user?.name}</p>
      {/* if the email name exist  */}
      <p>{user?.email}</p>
    </div>
  );
};

export default User;
