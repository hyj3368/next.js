"use client";

import { Trash } from "lucide-react";
import { useState } from "react";

const Todolist = () => {
  const [list, setList] = useState("");
  const [todo, setTodo] = useState([]);

  return (
    <>
      <div onChange={(e) => setList((prev) => e.target.value)}>
        <input
          className="border-2 border-red-200"
          placeholder="오늘할일"
          type="text"
        />
        <button
          onClick={() => setTodo((prev) => [...prev, list])}
          className="text-black bg-sky-200 p-1"
        >
          등록
        </button>
      </div>
      <div className="flex flex-col">
        <span>{props.name}</span>
        {todo.map((v, i) => (
          <div key={i} className="flex gap-1">
            <span className="text-red-700">{v}</span>
            <Trash
              onClick={() =>
                setTodo((prev) => [...prev].filter((x, y) => i != y))
              }
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default Todolist;
