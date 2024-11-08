import { Button, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { v4 } from 'uuid'
import { addTodo } from './components/utils'
import { useQueryClient } from '@tanstack/react-query'

export const AddTodo = () => {
    const [newTask,setNewTask]=useState('')
    const queryClient = useQueryClient()
    const handleAdd=async()=>{
      await addTodo({task:newTask})
      queryClient.invalidateQueries('todos')
      setNewTask()

      // console.log(newTask);
        
      //   setTodos(prev=>[...prev,{id:v4(),task:newTask,completed:false}])
      //   setNewTask('')
    }
  return (
    <div className='addtodo'>
      <TextField id="filled-basic" label="add new task..." variant="filled" 
        sx={{backgroundColor:"white"}}
        value={newTask}
        onChange={(e)=>setNewTask(e.target.value)}
      />
      <Button variant='outlined' onClick={handleAdd} >Add</Button>
    </div>
  )
}
