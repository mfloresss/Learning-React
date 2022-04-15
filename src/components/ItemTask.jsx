import React, { useMemo, useEffect, memo } from "react";

const ItemTask = memo(({ task, deleteTask }) => {
  const aviableTask = useMemo(() => task.length > 0, [task]);

  // useEffect(() => {
  //   console.log("Item RENDER " + task.map((t) => t.title));
  // });

  return aviableTask ? (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ul
        style={{
          width: "100%",
          height: "250px",
          overflow: "auto",

          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0 50px",
        }}
      >
        {task.map((t) => (
          <li
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            key={t.id}
          >
            {"- "}
            {t.title}
            <button
              style={{ padding: "5px 20px" }}
              onClick={() => deleteTask(t.id)}
            >
              Borrar
            </button>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <span>No hay tareas, agregue una</span>
  );
});

export default ItemTask;
