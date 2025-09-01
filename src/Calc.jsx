"use client";

import { useState } from "react";

const Clac = () => {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [sum, setSum] = useState(0);

  const add = () => {
    setSum((x) => first + second);
  };
  return (
    <div>
      <input
        onChange={(e) => setFirst((prev) => +e.target.valid)}
        type="text"
      ></input>
      <input
        onChange={(e) => setSecond((prev) => +e.target.valid)}
        type="text"
      ></input>
      <button onClick={add}>+</button>
      <span>합: {sum}</span>
    </div>
  );
};
export default Clac;
