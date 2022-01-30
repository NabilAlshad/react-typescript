import React from "react";

export interface profileProps {
  name: string;
}
const Profile = ({ name }: profileProps) => {
  return (
    <div>
      <p>the name is {name}</p>
    </div>
  );
};

export default Profile;
