import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

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
      <h1>useState Example</h1>
      <span style={{ fontSize: "150px" }}>{count}</span>

      <button
        style={{ padding: "10px 20px" }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}
