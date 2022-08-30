import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hook/hook";
import {  todoInto,  editTodo , remuve} from "../redux/todoReducer";
import { RootState } from "../redux/store";
import SmileLists from "./SmileLists";
import { useRef } from "react";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";

interface Propsi {
  todoText: string;
  todoId: number;
}

function Init(props: Propsi) {
  let idtext = props.todoId
  const [show, setShow] = useState<boolean>(false);
  const casting = useRef(null);
  const dispatch = useAppDispatch();
  
  const [intoTodo, setTodo] = useState<string>("");
  const [idInput, setId] = useState<number>(0);
  const [choosing, setChoosing] = useState<boolean>(false);
  const [intext, setIntext] = useState<string>("");
  const [editTodoChoos , setEditTodo]=useState<boolean>(false)
  const smileList = useAppSelector((state: RootState) => state.todoList.todos);

  const toggleSidebar = () => setChoosing(!choosing);
  const editTodoList = () => setEditTodo(!editTodoChoos);


  
  // input functions
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  const editChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setIntext(e.target.value);

  }
//funtion submit input
  const handleSumbit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(todoInto({ text: intoTodo, id: idInput }));
    setTodo("");
  };
  return (
    <div  >
      <div  className="card">
        <span className="button_on" ref={casting} onClick={() => setShow(!show)} >
          <i className="fas fa-ellipsis-v"></i>
        </span>
{/* funtion viow in button */}
        <Overlay target={casting.current} show={show} placement="right">
          {(props) => (
            <Tooltip id="overlay-example" {...props}>
              {/* edit text */}
              <div onClick={editTodoList}>
                {" "}
                <span>
                  <i className="far fa-edit"></i>
                </span>{" "}
                Rename list{" "}
              </div>
              {/* delite list */}
              <div onClick={()=> dispatch(remuve(idtext))}>
                <i className="fas fa-prescription-bottle"></i> Delite list
              </div>
            </Tooltip>
          )}
        </Overlay>

        {/* text */}
        {editTodoChoos ? (
          <input
            type="text"
            placeholder="edit text"
            className="edit_input_main"
            value={intext}
            onChange={editChange}
            onKeyDown={() =>
              dispatch(editTodo({ onId: props.todoId, newText: intext }))
            }
          />
        ) : (
          <h3 className="card_main">{props.todoText}</h3>
        )}
        {/* text end */}
        <div
          className="text_add"
          onClick={() => setId(props.todoId)}
          onMouseDown={() => toggleSidebar()}
        >
          <span className="glyphicon">&#x2b;</span> Add a tasks
        </div>
        <div className="set">
          {choosing ? (
            <form onSubmit={handleSumbit}>
              <input
                placeholder="Title"
                className="inputSmileList"
                type="text"
                value={intoTodo}
                onChange={handleChange}
                onMouseOut={(f) => setChoosing(false)}
              />
            </form>
          ) : (
            ""
          )}
        </div>

        {smileList.map((todo ) => {
          return (
            <SmileLists
            key={todo.id}
              todo={todo.arr}
              inId={todo.id}
              mainTodo={props.todoId}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Init;
