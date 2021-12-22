import React from "react";
export type profileProps = {
  name: string;
};
const Profile = ({ name }: profileProps) => {
  return (
    <div>
      <h2>my name is {name}</h2>
    </div>
  );
};

export default Profile;
