import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useRef, useState } from 'react';
import Sidebar from './components/sidebar';
import TodoList from './components/todoList';

function App() {
    const [input, setInput] = useState([]); //Stores data for Input
    const [completeInput, setCompleteInput] = useState([])
    const [incompleteInput, setIncompleteInput] = useState([])
    const [deleteInput, setDeleteInput] = useState([])
    
    const inputElement = useRef();
    
    const addTodo = (todo) => {
        if (!todo.value || /^\s*$/.test(todo.value)) {
            return;
        }
        //Add to All-Input Tab
        const newTodo = [...input, todo]
        setInput(newTodo);
        
        //Adds to Unfinished Tab
        const incompleteTodo = [...incompleteInput, todo]
        setIncompleteInput(incompleteTodo)
    }

    const updateTodo = (todoId, newValue) => {
        // if (!newValue.value || /^\s*$/.test(newValue.value)) {
            //     return;
            // }
            
        setInput(prev => prev.map(item => (item.id === todoId ? {id: item.id, cName: item.cName,value: newValue} : item)))
            
        inputElement.current.value = '';
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({
            id: input.length + 1,
            value: inputElement.current.value,
            cName: 'drop-down-menu'
        })

        inputElement.current.value = '';
        inputElement.current.focus();
    }
    
    const handleComplete = (Task) => {
        if (completeInput.includes(Task)) {
            alert('Already Completed')
        } else {
            //Delete from Unfinished
            const incompleteLeft = incompleteInput.filter(c => c.id !== Task.id)
            setIncompleteInput(incompleteLeft)
    
            //Add to the Complete Tab
            const completedTodo = [...completeInput, Task]
            setCompleteInput(completedTodo)
        }

    }
    
    const handleRestore = (Task) => {
        if (input.includes(Task)) {
            //Add to the Unfinished Tab
            const incompletedTodo = [...incompleteInput, Task]
            setIncompleteInput(incompletedTodo)
        } else {
            //Add to the All Tab
            const inputTodo = [...input, Task]
            setInput(inputTodo)

            //Add to the Unfinished Tab
            const incompletedTodo = [...incompleteInput, Task]
            setIncompleteInput(incompletedTodo)
        }

        //Delete from Complete TAB
        const completeLeft = completeInput.filter(c => c.id !== Task.id)
        setCompleteInput(completeLeft)
        
        //Delete from Delete TAB
        const deleteLeft = deleteInput.filter(c => c.id !== Task.id)
        setDeleteInput(deleteLeft)
    }

    const handleDelete = Task => {

        // Add delete class to All-Input Tab
        setInput((prev) => prev.map(el => el === Task ? {id: Task.id, value: Task.value, cName: 'drop-down-menu active'} : el))
        // Add delete class to Unfinished Tab
        setIncompleteInput((prev) => prev.map(el => el === Task ? {id: Task.id, value: Task.value, cName: 'drop-down-menu active'} : el))
        // Add delete class to Completed Tab
        setCompleteInput((prev) => prev.map(el => el === Task ? {id: Task.id, value: Task.value, cName: 'drop-down-menu active'} : el))

        setTimeout(() => {
            //Delete from All-Input
            const todoLeft = input.filter(c => c.id !== Task.id)
            setInput(todoLeft);
            //Delete from Unfinished
            const incompleteLeft = incompleteInput.filter(c => c.id !== Task.id)
            setIncompleteInput(incompleteLeft);
            //Delete from Complete
            const completeLeft = completeInput.filter(c => c.id !== Task.id)
            setCompleteInput(completeLeft)
            
            //Add to the Delete Tab
            const deletedTodo = [...deleteInput, Task]
            setDeleteInput(deletedTodo)

        }, 1400) //Counts 1.4secs before running
    }
    
    return (
        <>
        <TodoList input={input} handleDelete={handleDelete} handleSubmit={handleSubmit} inputElement={inputElement} updateTodo={updateTodo} />
        <Router>
            <Sidebar all={input} completed={completeInput} incomplete={incompleteInput} deleted={deleteInput} handledelete={handleDelete} handleComplete={handleComplete} handleRestore={handleRestore}/>
            <Routes>
                <Route path="/"></Route>
            </Routes>
        </Router>
      </>
  );
}

export default App;
