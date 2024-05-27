import React from 'react';
import '../../styles/todo/Todo.css';

const Todo = ({ task, onDelete }) => {
    return (
        <div className="todo-item">
            <span>{task}</span>
            <button className="delete-button" onClick={onDelete}>Eliminar</button>
        </div>
    );
};

export default Todo;