import { useState, useEffect } from 'react';
import Todo from './Todo';
import '../../styles/todo/TodoList.css';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(storedTasks);
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className="todo-list">
            <h2>To-do List</h2>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Agregar nueva tarea"
            />
            <button className="add-button" onClick={addTask}>Agregar</button>
            <div>
                {tasks.map((task, index) => (
                    <Todo key={index} task={task} onDelete={() => deleteTask(index)} />
                ))}
            </div>
        </div>
    );
};

export default TodoList;