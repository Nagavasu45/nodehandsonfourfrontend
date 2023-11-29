import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {
  const [ldata,ldataset]=useState({
    Email:"",
    Password:""
  })
  const appdata1=(e)=>{
    
    ldataset({ ...ldata, [e.target.name]: e.target.value });
    console.log(ldata)
  };
  const datasubmit=(e)=>{
    e.preventDefault()
    axios
      .post('https://nodehanson4.onrender.com/login',ldata)
      .then((res) => {
        
        
        
        if (res.data.msg === "your login successfully") {
          alert(res.data.msg)
      }
      else{
        alert(res.data.msg);
      }
      })
      .catch((error) => {
        console.log(error);
       
      });

      ldataset({        
        Email: "",
        Password: "",
      });

  };
  return (
    <div>
        <form className='r1'>
        <h3>Login with email and password</h3>
        <label htmlFor="Email">Email:
        </label>
        <input type='email' name='Email' value={ldata.Email} onChange={appdata1} required /><br/>
        <label htmlFor="Password">Password:
        </label>
        <input type='password' name='Password' value={ldata.Password} onChange={appdata1} required/><br/>
        <button type='reset'>Cancel</button>
        <button type='submit'onClick={datasubmit} >SignIn</button>
        </form>
      
    </div>
  )
}

export default Login
