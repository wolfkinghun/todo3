import { Button, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const Login = ({setIsloggedIn}) => {
    const[usermame,setUsername]= useState('')
    const[pw,setPw]=useState('')
    const[isValidUsername,setIsValidUsername] = useState(null)
    const[isValidPw,setIsValidPw] = useState(null)

    const handleLogin=()=>{
        console.log(usermame,pw);
        import.meta.env.VITE_USERNAME==usermame &&import.meta.env.VITE_PW==pw ? setIsloggedIn(true) : setIsloggedIn(false)
    }
    return (
    <div className='login'>
      <h3>Login form</h3>
      <TextField id="standard-basic" label="Usermame" variant="standard" value={usermame}  onChange={(e)=>setUsername(e.target.value)} error={!isValidUsername && isValidUsername!=null} onBlur={()=>setIsValidUsername(import.meta.env.VITE_USERNAME==usermame)}/>
      <TextField id="standard-basic" label="Password" variant="standard" value={pw} type='password'  onChange={(e)=>setPw(e.target.value)}
        error={!isValidPw && isValidPw!=null} onBlur={()=>setIsValidPw(import.meta.env.VITE_PW==pw)}/>
      <Button variant="outlined" onClick={handleLogin}>Login</Button>
    </div>
  )
}

export default Login
