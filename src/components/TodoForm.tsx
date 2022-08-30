import React, { useState } from "react";
import { useAppDispatch } from "../hook/hook";
import { addTodo } from "../redux/todoReducer";
import "../scss/style.scss";
function TodoForm() {
  const [textTodo, setTextTodo] = useState<string>("");
  const dispach = useAppDispatch();
  const [toggle, setToggle] = useState(false);
  const ToggleFun = () => setToggle(!toggle);
  const handeChagen = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextTodo(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    dispach(addTodo(textTodo));
    setTextTodo(" ");
  };
  return (
    <div className="input">
      <form onSubmit={handleSubmit}>
        {toggle ? (
          <input
          className="input_addList"
            type="text"
            value={textTodo}
            onChange={handeChagen}
            placeholder="New list"
            onMouseOut={()=>setToggle(false)}
          />
        ) : (
          <div className="add_newList" onClick={() => ToggleFun()}> + Add new list</div>
        )}
      </form>
    </div>
  );
}

export default TodoForm;
