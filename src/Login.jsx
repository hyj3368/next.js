"use client";

import { Eye, EyeOff, Heart } from "lucide-react";
import { useState } from "react";

const Login = () => {
  const [isOpen, setIsOpen] = useState(true);

  const abc = () => {
    setIsOpen((x) => !x);
  };

  return (
    <div className="flex gap-2 items-center">
      <input
        className="border-2 border-white"
        type={isOpen ? "text" : "password"}
      ></input>
      <div onClick={abc}>{isOpen ? <Eye /> : <EyeOff />}</div>
    </div>
  );
};
export default Login;
