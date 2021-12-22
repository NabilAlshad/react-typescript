import React from "react";
import "./App.css";
import Button from "./Components/EventProps/Button";
import Input from "./Components/EventProps/Input";
import Heading from "./Components/Props/Heading";
import Oscar from "./Components/Props/Oscar";
import PersonList from "./Components/Props/PersonList";
import User from "./Components/States/User";

function App() {
  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];
  return (
    <div className="App">
      <PersonList names={nameList} />
      <Oscar>
        <Heading>this is a placeholder text</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          console.log("i am clicked", event, id);
        }}
      ></Button>
      <Input />
      <User />
    </div>
  );
}

export default App;
