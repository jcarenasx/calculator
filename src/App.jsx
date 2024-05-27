// App.js
import Calculator from './components/calculator/Calculator';
import TodoList from './components/todo/TodoList';
import './styles/App.css';

const App = () => {
    return (
        <div className="App">
            <div className="left">
                <Calculator />
            </div>
            <div className="right">
                <TodoList />
            </div>
        </div>
    );
};

export default App;
