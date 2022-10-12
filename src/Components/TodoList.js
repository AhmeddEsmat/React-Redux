import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { showDone, showUndone,showAll } from "../Redux/reducer";

const TodoList = () => {
  const todos = useSelector((state) => state.todo.filteredTodos);
  const [task, setTask] = useState(todos);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const handleShowDone = () => {
  
    dispatch(showDone());
  };
  const handleShowUndone = () => {

    dispatch(showUndone());
  };

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <div>
        <button onClick={handleShowDone}>Completed</button>
        <button onClick={handleShowUndone}>Uncompleted</button>
        <button onClick={()=>{dispatch(showAll())}}>Show all</button>
      </div>
    </div>
  );
};

export default TodoList;
