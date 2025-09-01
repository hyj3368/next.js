import Todo from "./Todo";

const List = (props) => {
  return (
    <div>
      <span>{props.name} 할일</span>
      {props.todolist.map((v, i) => (
        <Todo key={i} v={v} click={() => props.click(i)} />
      ))}
    </div>
  );
};

export default List;
