import { useDispatch } from "react-redux";
import { toggleComplete, toggleEdit, deleteTodo } from "../Redux/reducer";
import { useState } from "react";

const TodoItem = ({ todo }) => {
  const [edit, setEdit] = useState("");
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(
      toggleComplete({
        id: todo.id,
        completed: !todo.completed,
      })
    );
  };
  const handleChange = (e) => {
    setEdit(e.target.value);
  };
  const handleEdit = (e) => {
    console.log(edit);
    dispatch(
      toggleEdit({
        id: todo.id,
        title: edit,
      })
    );
  };
  const handleDelete = () => {
    dispatch(
      deleteTodo({
        id: todo.id,
      })
    );
  };

  return (
    <div>
      <span>{todo.title}</span>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
      ></input>
      <button onClick={handleDelete}>Delete</button>
      <button
        onClick={(e) => {
          handleEdit(e.target.value);
        }}
      >
        Edit
      </button>
      <input
        style={{ width: 100 }}
        type="text"
        placeholder="Edit your todo"
        onChange={(e) => {
          handleChange(e);
        }}
      ></input>
    </div>
  );
};

export default TodoItem;
