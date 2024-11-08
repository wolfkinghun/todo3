import { Box, List } from '@mui/material'
import React from 'react'
import { Todo } from './Todo'
import { TodoFooter } from './TodoFooter'
import { useQuery } from '@tanstack/react-query'
import { getTodos } from './utils'

export default function TodoList () {
  const {data,isLoading,isError,error} = useQuery({queryKey:['todos'],queryFn:getTodos})
  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>Error: {error.message}</div>
  console.log(data.data );
  return (
    <div className='todolist'>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <List>
          {data.data.map(obj=>
            <Todo key={obj.id} {...obj}/>            
          )}
        </List>
        <TodoFooter  nrTask={data.data.filter(obj=>!obj.completed).length}/>
      </Box>
    </div>
  )
}