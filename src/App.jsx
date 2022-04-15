import React from "react";
import Counter from "./components/Counter";
import ListTask from "./components/ListTask";
import UserCard from "./components/UserCard";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Counter />
      <UserCard />
      <ListTask />
    </div>
  );
}

export default App;
