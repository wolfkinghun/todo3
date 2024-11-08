import { Button } from '@mui/material'
import React from 'react'

export const Logout = ({setIsloggedIn}) => {
  return (
    <div>
      <button onClick={() => setIsloggedIn(false)}>Logout</button>
    </div>
  )
}
