import logo from './logo.svg';
import './App.css';
import Todo from './components/todo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useRef, useState } from 'react';
import Sidebar from './components/sidebar';

function App() {
    const [input, setInput] = useState([])
    
    const inputElement = useRef();

    const addTodo = (todo) => {
        if (!todo.value || /^\s*$/.test(todo.value)) {
            return;
        }

        const newTodo = [...input, todo]
        setInput(newTodo);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo({
            id: input.length + 1,
            value: inputElement.current.value
        })
        inputElement.current.focus();
    }
    
    const handleChange = (e) => {

    }

    const handleDelete = Task => {
        const todoLeft = input.filter(c => c.id != Task.id)

        setInput(todoLeft);
    }

  return (
      <>
        <Todo input={input} handleDelete={handleDelete} handleSubmit={handleSubmit} handleChange={handleChange} inputElement={inputElement} />
        <Router>
            <Sidebar />
        </Router>
      </>
  );
}

export default App;
