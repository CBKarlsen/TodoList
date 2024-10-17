import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

function TodoItem({ task, deleteTask, toggleCompleted }) {
    return (
        <div className={`task-item ${task.completed ? 'completed' : ''}`}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleCompleted(task.id)}
            />
            <div className="task-details">
                <span className="task-text">{task.text}</span>
                <span className="task-time">{task.time}</span>
            </div>
            <button onClick={() => deleteTask(task.id)} className="delete-btn">
                <FontAwesomeIcon icon={faTrash} />
            </button>
            <button className="edit-btn">
                <FontAwesomeIcon icon={faEdit} />
            </button>
        </div>
    );
}

export default TodoItem;