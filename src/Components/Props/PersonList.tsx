import React from "react";

type personListProps = {
  names: {
    first: string;
    last: string;
  }[];
};
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
