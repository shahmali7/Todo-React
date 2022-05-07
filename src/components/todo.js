import React from 'react'
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

function Todo({text,todos,setTodos,todo}) {
    const deleteHandler =()=>{
        setTodos(todos.filter((del)=>del.id !==todo.id))
    }
    const completeHandler =()=>{
        setTodos(todos.map((item)=>{
          if(item.id ===todo.id){
          return{
            ...item,completed:!item.completed
          }
        }
        return item
        }))}
  return (
    
        
          <li>
           <Stack direction="row" spacing={0.5}>
              <Button className='success' variant="contained" color="success" onClick={completeHandler} >✓</Button>
            </Stack>
            <div className='list-todo'>
             {text}
            </div>
            <Stack direction="row" spacing={0.5} className='delete'>
              <IconButton aria-label="delete" onClick={deleteHandler} className='delete' > <DeleteIcon /></IconButton>
            </Stack>
          </li>
        
  
  )
}
export default Todo