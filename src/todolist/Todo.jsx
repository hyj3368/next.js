import { Trash } from "lucide-react";

const Todo = (props) => {
  return (
    <div className="flex gap-1">
      <span>{props.v}</span>
      <Trash onClick={props.click} />
    </div>
  );
};
export default Todo;
