"used client";

import { useState } from "react";
import Register from "./Register";
import List from "./List";

const Todolist = (props) => {
  const [task, setTask] = useState("");
  const [todolist, setTodolist] = useState([]);

  const deleteTask = (i) =>
    setTodolist((prev) => [...prev].filter((x, y) => i != y));

  return (
    <>
      <Register
        change={(e) => setTask((prev) => e.target.value)}
        click={() => setTodolist((prev) => [...prev, task])}
      />
      <List name={props.name} todolist={todolist} click={deleteTask} />
    </>
  );
};
export default Todolist;
