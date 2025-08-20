"use client";

import { useState } from "react";

const Count = () => {
  const [num, setNum] = useState(0);
  const plus = () => setNum((x) => x + 1);
  const minus = () => setNum((x) => x - 1);

  return (
    <>
      <button onClick={minus}>-</button>
      <span style={{ color: num >= 10 ? "blue" : "white" }}>{num}</span>
      <button onClick={plus}>+</button>
    </>
  );
};

export default Count;
