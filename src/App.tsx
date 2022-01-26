import React from "react";
import "./App.css";
import Status from "./Components/AdvancedProps/Status";
import Button from "./Components/EventProps/Button";
import Input from "./Components/EventProps/Input";
// import Button from "./Components/EventProps/Button";
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
        <Heading>oscar goes to chuthia saaan</Heading>
      </Oscar>

      <User />
      <Status status="loading" />
      <Button handleClick={(event, id) => console.log(event, id)}></Button>
      <Input handleChange={(event) => console.log(event)} />
    </div>
  );
}

export default App;
