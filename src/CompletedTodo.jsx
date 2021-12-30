import { useContext } from "react";
import { Fragment } from "react/cjs/react.production.min";
import CompletedTask from "./CompletedTaskContext";
import TodoContext from "./TodoContext";

const CompletedTodo = () => {
    const { completed, setCompleted } = useContext(CompletedTask);
    const { TodoItems, setTodoItems } = useContext(TodoContext);

    const unComplete = (id) => {
        const index = completed.findIndex(t => t.id == id);
        let newTask = [...completed];
        newTask[index].isDone = false;
        let unCompletedItems = completed.filter(t => t.id != id);
        setCompleted(unCompletedItems);
        setTodoItems([...TodoItems, newTask[index]]);
    };

    const deleteTask = (id) => {
        const newTaskTodo = completed.filter(t => t.id != id);
        setCompleted(newTaskTodo);
    };


    return (
        <div className="completedTodo main">
            <div>
                <h4>COMPLETED TODOS</h4>
            </div>
            <hr className="hr"></hr>
            <div>
                <ul className="list-group">
                    {
                        completed.map(t => (
                            <Fragment>
                                <li className="d-flex align-items-center justify-content-between completedTask todoTask ">
                                    {t.title}
                                    <span>
                                        <i className="fa fa-times text-danger pointer delBtn m-2 radius" onClick={() => unComplete(t.id)}></i>
                                        <i className="fa fa-trash text-info pointer trashBtn radius" onClick={() => deleteTask(t.id)}></i>
                                    </span>
                                </li>
                                <hr className="hrCompleted"></hr>
                            </Fragment>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
};

export default CompletedTodo;