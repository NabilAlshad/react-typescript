import React from "react";
import { IpersonList } from "../Types";
// type personListProps = {
//   names: {
//     first: string;
//     last: string;
//   }[];
// };
interface personListProps {
  names: IpersonList[];
}
const PersonList = (props: personListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h1>
            {name.first} {name.last}
          </h1>
        );
      })}
    </div>
  );
};

export default PersonList;
