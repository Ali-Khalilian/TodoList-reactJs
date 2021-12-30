import { Fragment, useState } from "react";
import { useContext } from "react";
import CompletedTask from "./CompletedTaskContext";
import TodoContext from "./TodoContext";

const TodoBuild = () => {
    const { TodoItems, setTodoItems } = useContext(TodoContext);
    const { completed, setCompleted } = useContext(CompletedTask);
    const [task, setTask] = useState("");

    const setTaskItem = (e) => {
        setTask(e.target.value);
    };
    const addTask = (e) => {
        e.preventDefault();
        let TodoInput = document.getElementById("TodoInput");
        if (task.length == 0 || TodoInput.value.trim() == "") {
            alert("Please Write Todo First");
            setTask("");
        } else {
            setTodoItems([...TodoItems, { title: task, id: Math.random(), isDone: false }]);
            setTask("");    
        }
    };

    const doneTask = (id) => {
        const index = TodoItems.findIndex(t => t.id == id);
        let newTask = [...TodoItems];
        newTask[index].isDone = true;
        setTodoItems(newTask);
        let doneItem = TodoItems[index];
        setCompleted([...completed, { title: doneItem.title, id: doneItem.id, isDone: doneItem.isDone }]);
        let unCompletedItems = TodoItems.filter(t => t.id != id);
        setTodoItems(unCompletedItems)
    };

    const deleteTask = (id) => {
        const newTaskTodo = TodoItems.filter(t => t.id != id);
        setTodoItems(newTaskTodo);
    };

  
        return (
            <div className="todoBuild main">
                <form className="form" onSubmit={addTask}>
                    <div className="d-flex">
                        <input type="text" id="TodoInput" placeholder="Write Todo ... " className="form-control" value={task} onChange={setTaskItem} />
                        <button type="submit" className="btn btn-dark text-light add-btn ml-1">ADD</button>
                    </div>
                    <div className="taskContainer">
                       {
                           TodoItems.length>0 ?  <ul className="list-group">
                           {
                               TodoItems.map(t => (
                                   <Fragment>
                                       <li className="d-flex align-items-center justify-content-between  todoTask ">
                                           {t.title}
                                           <span className="d-flex align-items-center justify-content-between">
                                               <i className="fa fa-check text-success pointer radius m-2 checkBtn" onClick={() => { doneTask(t.id) }}></i>
                                               <i className="fa fa-trash text-info pointer radius trashBtn" onClick={() => deleteTask(t.id)}></i>
                                           </span>
                                       </li>
                                       <hr className="hrTodoItems"></hr>
                                   </Fragment>
                               ))
                           }
                       </ul>
                       : <h4 className="mt-4">No Todo Exist...</h4> 
                       }
                    </div>
                </form>
            </div>
        )
    } 



export default TodoBuild;