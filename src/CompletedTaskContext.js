import { createContext } from "react"

const CompletedTask = createContext({
    completed: [],
    setCompleted: () => { }
});

export default CompletedTask;