import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Create a react project ✋',
            completed: true,
            time: '5:23 AM, 01/06/2022'
        },
        {
            id: 2,
            text: 'Learn React ❤️',
            completed: false,
            time: '5:22 AM, 01/06/2022'
        },
        {
            id: 3,
            text: 'Create a Todo App 📝',
            completed: false,
            time: '5:21 AM, 01/06/2022'
        }
    ]);

    const [text, setText] = useState('');

    function addTask() {
        const newTask = {
            id: Date.now(),
            text,
            completed: false,
            time: new Date().toLocaleTimeString() + ', ' + new Date().toLocaleDateString()
        };
        setTasks([...tasks, newTask]);
        setText('');
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    function toggleCompleted(id) {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            } else {
                return task;
            }
        }));
    }

    return (
        <div className="todo-list-container">
            <h1 className="title">TODO LIST</h1>
            <div className="add-task-container">
                <input
                    value={text}
                    onChange={e => setText(e.target.value)}
                    placeholder="Add a new task"
                />
                <button onClick={addTask} className="add-task-button">Add Task</button>
            </div>
            <div className="tasks-container">
                {tasks.map(task => (
                    <TodoItem
                        key={task.id}
                        task={task}
                        deleteTask={deleteTask}
                        toggleCompleted={toggleCompleted}
                    />
                ))}
            </div>
        </div>
    );
}

export default TodoList;