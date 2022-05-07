import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


function AddTodo({input,setInput,todos,setTodos}) {
    const inputText =(e)=>{
      setInput(e.target.value)
    }
    const submitHandler =(e)=>{
      e.preventDefault()
      setTodos([
        ...todos,
        {text:input,
        completed:false,
        id: Math.random()
        }
      ])
      setInput('')
    }
    
  return (
    <React.Fragment>
    <form onSubmit={submitHandler} >
        <input 
        className='input'
        type='text'
        onChange={inputText}
        value={input}
        placeholder="add something"
        required
        />
        <Stack direction="row" spacing={2}>
        <Button type='submit' variant="outlined" href="#outlined-buttons" color='inherit'>
        Add
        </Button>
      </Stack>
    </form>
    </React.Fragment>
  )
}
export default AddTodo