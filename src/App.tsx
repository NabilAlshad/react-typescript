import React from "react";
import "./App.css";
import Status from "./Components/AdvancedProps/Status";
import { Private } from "./Components/Auth/Private";
import Profile from "./Components/Auth/Profile";
import Button from "./Components/EventProps/Button";
import Input from "./Components/EventProps/Input";
import List from "./Components/Generic/List";
// import Button from "./Components/EventProps/Button";
import Heading from "./Components/Props/Heading";
import Oscar from "./Components/Props/Oscar";
import PersonList from "./Components/Props/PersonList";
import { Counter } from "./Components/Reducer/Counter";
import Resctricted from "./Components/Restriction/Resctricted";
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
      <List
        items={[
          {
            id: 1,
            first: "Bruce",
            last: "Wayne",
          },
          { id: 2, first: "Clark", last: "Kent" },
          {
            id: 3,
            first: "Princess",
            last: "Diana",
          },
        ]}
        onClick={(item) => console.log(item)}
      />
      <PersonList names={nameList} />
      <Oscar>
        <Heading>oscar goes to chuthia saaan</Heading>
      </Oscar>

      <User />
      <Status status="loading" />
      <Button handleClick={(event, id) => console.log(event, id)}></Button>
      <Input handleChange={(event) => console.log(event)} />
      <Counter />
      <Private isLoggedIn={true} Component={Profile}></Private>
      <Resctricted value={10} isPositive />
    </div>
  );
}

export default App;
