import React from 'react'
import { useState } from 'react'

export const TodoFooter = ({nrTask}) => {

  return (
    <div style={{color:"red"} }>
       Task left: {nrTask}
    </div>
  )
}
