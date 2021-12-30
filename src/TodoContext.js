import { createContext } from "react"

const TodoContext = createContext({
    TodoItems: [],
    setTodoItems: () => { },
    completeditem : []
});

export default TodoContext;