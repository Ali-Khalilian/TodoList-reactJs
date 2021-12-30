import react, { useState } from "react";
import reactDom from "react-dom";
import "./assets/style.css"
import TodoBuild from "./TodoBuild";
import TodoContext from "./TodoContext";
import CompletedTodo from "./CompletedTodo";
import CompletedTask from "./CompletedTaskContext";

function App() {

  const [completed, setCompleted] = useState([]);
  const [TodoItems, setTodoItems] = useState([]);

  return (
    <div className="container mt-5">
      <div className="d-flex-wrap d-sm-flex container-div">
        <TodoContext.Provider value={{ TodoItems, setTodoItems}}>
        <CompletedTask.Provider value={{ completed, setCompleted }}>
          <TodoBuild />
          <CompletedTodo />
          </CompletedTask.Provider>
        </TodoContext.Provider>
      </div>
    </div>
  )
};

export default App;
