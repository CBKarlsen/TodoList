import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faSave } from '@fortawesome/free-solid-svg-icons';

function TodoItem({ task, deleteTask, toggleCompleted, startEditing, editId, editText, setEditText, saveEdit }) {
    const isEditing = editId === task.id;

    return (
        <div className={`task-item ${task.completed ? 'completed' : ''}`}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleCompleted(task.id)}
            />

            {isEditing ? (
                <input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="edit-input"
                />
            ) : (
                <div className="task-details">
                    <span className="task-text">{task.text}</span>
                    <span className="task-time">{task.time}</span>
                </div>
            )}

            <button onClick={() => deleteTask(task.id)} className="delete-btn">
                <FontAwesomeIcon icon={faTrash} />
            </button>

            {isEditing ? (
                <button onClick={() => saveEdit(task.id)} className="save-btn">
                    <FontAwesomeIcon icon={faSave} />
                </button>
            ) : (
                <button onClick={() => startEditing(task)} className="edit-btn">
                    <FontAwesomeIcon icon={faEdit} />
                </button>
            )}
        </div>
    );
}

export default TodoItem;