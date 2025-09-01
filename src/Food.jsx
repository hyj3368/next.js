"use client";

import { useState } from "react";

const Food = () => {
  const [food, setFood] = useState("");
  const [isClick, setIsChick] = useState(false);

  return (
    <div>
      <input
        onChange={(e) => {
          setIsChick((x) => false);
          setFood((x) => e.target.value);
        }}
        className="border-2 border-white"
        type="text"
      />
      <button
        onClick={() => {
          setIsChick((x) => true);
        }}
      >
        등록
      </button>
      <div>내가 먹고 싶은 것: {isClick && food}</div>
    </div>
  );
};
export default Food;
