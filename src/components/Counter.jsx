import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        height: "800px",
        width: "30%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#F24333",
        borderRadius: "20px"
      }}
    >
      <h1 style={{ fontSize: "50px" }}>useState Example</h1>
      <span style={{ fontSize: "150px", transition: "2s" }}>{count}</span>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
