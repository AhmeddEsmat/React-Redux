import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/reducer";

const AddToDo = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
    console.log(todo);
  };
  const handleSubmit = () => {
    if (todo) {
      dispatch(
        addTodo({
          title: todo,
        })
      );
    }
  };

  return (
    <div>
      <input type="text" onChange={(e) => handleChange(e)} />
      <button type="submit" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
};

export default AddToDo;
