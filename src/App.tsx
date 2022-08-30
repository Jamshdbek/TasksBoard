import React from "react";
import TodoForm from "./components/TodoForm";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import TodoItom from "./components/TodoItom";
import TodoRow from "./components/TodoRow";
import "./scss/style.scss";
function App() {
  const todos = useSelector((state: RootState) => state.todoList.todos);

  return (
    <>
      <header>
        <div>
        <i className="fa">&#xf0c9;</i>
        </div>
      <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><rect rx="20" fill="white"></rect><rect x="70" y="18" width="40" height="92" rx="7" fill="#2684FC"></rect><rect x="18" y="18" width="40" height="40" rx="7" fill="#0066DA"></rect></svg>
        <h3>TasksBoard</h3>
      <input type="text" placeholder="Search" />
      </header>
      <div className="main">
    

        <TodoItom todos={todos} />
        <TodoForm />
      </div>
    </>
  );
}

export default App;
