import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Take out the trash✋',
            completed: true,
            time: '12:35, 10/10/2024'
        },
        {
            id: 2,
            text: 'Turn of all of the lights 💡️',
            completed: false,
            time: '12:35, 10/10/2024'
        },
        {
            id: 3,
            text: 'Checked everything above?',
            completed: false,
            time: '12:35, 10/10/2024'
        }
    ]);

    const [text, setText] = useState('');
    const [editId, setEditId] = useState(null);  // For tracking the task being edited
    const [editText, setEditText] = useState(''); // For storing edited text

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

    function startEditing(task) {
        setEditId(task.id);
        setEditText(task.text);
    }

    function saveEdit(id) {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return { ...task, text: editText };
            } else {
                return task;
            }
        }));
        setEditId(null);
        setEditText('');
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
                        startEditing={startEditing}    // Pass startEditing
                        editId={editId}                // Pass editId to check which task is being edited
                        editText={editText}            // Pass the current edited text
                        setEditText={setEditText}      // Function to update the editText
                        saveEdit={saveEdit}            // Function to save the edited task
                    />
                ))}
            </div>
        </div>
    );
}

export default TodoList;