import { useState } from "react";
import TodoBox from "./TodoBox";


const Todo = () => {
    const [tasks, setTasks] = useState<string[]>([]);
    const [InputTask, setInputTask] = useState("");
    function handleAddTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("task is : ", InputTask)
        setTasks((prev) => {
            return [...prev, InputTask]
        })
        setInputTask("");
    }
    return (
        <>
            <h1>Todo App</h1>
            <form onSubmit={handleAddTask}>
                <input
                    type="text"
                    value={InputTask}
                    onChange={(e) => setInputTask(e.target.value)}
                    placeholder="write your todo..."
                />
                <input type="submit" />
            </form>
            <TodoBox tasks={tasks} />
        </>
    )
}

export default Todo;