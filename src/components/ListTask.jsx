import React, { useState, useEffect, useMemo } from "react";
import ItemTask from "./ItemTask";
import getTask from "../helpers/getTask";

const ListTask = () => {
  const [tasks, setTasks] = useState(getTask);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  const addTask = () => {
    if (text !== "") {
      const newTask = { id: tasks.length + 1, title: text };
      setTasks([...tasks, newTask]);
    }
  };

  const searchTask = () => {
    setSearch(text);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const filterTask = useMemo(
    () =>
      tasks.filter((task) =>
        task.title.toLowerCase().includes(search.toLowerCase())
      ),
    [search, tasks]
  );

  // useEffect(()=> console.log("render list"))

  return (
    <div
      style={{
        height: "80%",
        width: "30%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#F24333",
        borderRadius: "20px",
      }}
    >
      <h1>Task</h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <input
          style={{
            width: "70%",
            height: "30px",
            paddingLeft: "10px",
            borderRadius: "10px",
            border: "none",
            outline: "none",
          }}
          type="text"
          placeholder="Enter the task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <button style={{ padding: "5px 20px" }} onClick={addTask}>
            Add Task
          </button>
          <button style={{ padding: "5px 20px" }} onClick={searchTask}>
            Search
          </button>
        </div>
      </div>
      <ItemTask task={filterTask} deleteTask={deleteTask} />
    </div>
  );
};

export default ListTask;
