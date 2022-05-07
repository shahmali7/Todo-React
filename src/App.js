import React, {useState,useEffect} from 'react'
import AddTodo from './components/addTodo';
import Todos from './components/todos';
import './App.css'
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


function App() {
  const [input,setInput] =useState('')
  const [todos,setTodos] =useState([])
  const [filterTodo,setFilter]=useState([])
  useEffect(()=>{
    saveLocalStorage();
  })
  useEffect(() => {
    setFilter(todos);
  }, [todos]);
  
  
  const allHandler = (e) => {
    e.preventDefault();
    return setFilter(todos);
  };
  const unCompleteHand = (e) => {
    e.preventDefault();
    setFilter(todos.filter((elems1) => elems1.completed === false));
  };
  const completeHand = (e) => {
    e.preventDefault();
    setFilter(todos.filter((elems) => elems.completed === true));
  };
  const saveLocalStorage=()=>{
    localStorage.setItem('Todos',JSON.stringify(todos))
  }
  
  return (
  <div className='App'>
   <div className='todo'>
    <header className='header'>
    Add Todo List
    </header>
    <AddTodo
      input={input}
      setInput={setInput}
      todos={todos}
      setTodos={setTodos}
    />
    <Todos
      todos={todos}
      setTodos={setTodos}
      filterTodo={filterTodo}
    />
      <div>
        <Box>
        <ButtonGroup variant="text" aria-label="text button group">
        <Button onClick={allHandler} >All</Button>
        <Button onClick={completeHand} color='success'>Complete</Button>
        <Button onClick={unCompleteHand} color='error'>unComplete</Button>
        </ButtonGroup>
      </Box>
      </div>
    </div>
  </div>
  );
}

export default App;
