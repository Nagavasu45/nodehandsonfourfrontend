import React, { useState } from 'react'
import Register from './Register'
import Login from './Login'

const MianCompo = () => {
    const [data1,dataset1]=useState('True')
    
    const but1=()=>{
      dataset1(!data1)      
    }
   
    
  return (
    <div>
        
    <button type='submit' onClick={but1}>Register/SignIn</button>
    
    {
            data1 ? <Register />:<Login />
    }
   
      
      
    </div>
  )
}

export default MianCompo
