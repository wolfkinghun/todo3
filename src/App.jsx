
import { useState } from 'react';
import './App.css'
import Header from './components/Header';
import TodoList from './components/TodoList';
import Login from './components/Login';
// import { myTodos } from './data.js';
import { Logout } from './components/Logout.jsx';
import { AddTodo } from './AddTodo.jsx';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient= new QueryClient()

function App() {
  //console.log(import.meta.env.VITE_USERNAME);
  const [isLoggedIn,setIsloggedIn] = useState(true)
  // const [todos,setTodos]=useState(myTodos)

  return (
    
    <div className='app'>
      <QueryClientProvider client={queryClient}>
      <Header/>
      {isLoggedIn ?  
      <>
        <AddTodo/>
        <TodoList />
        <Logout setIsloggedIn={setIsloggedIn}/>
      </>
       : 
       <Login setIsloggedIn={setIsloggedIn} />}
       </QueryClientProvider>
      </div>
      
    
  )
}

export default App
