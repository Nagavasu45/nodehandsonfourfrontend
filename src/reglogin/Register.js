import React, { useState } from 'react'
import "./Styles.css"
import axios from 'axios';

const Register = () => {
  const [rdata,rdataset]=useState({
    Name:"",
    Phonenumber:"",
    Email:"",
    Password:""
  })
  const appdata=(e)=>{
    
    rdataset({ ...rdata, [e.target.name]: e.target.value });
    console.log(rdata)
  };
  const datasubmit=(e)=>{
    e.preventDefault()
    // https://nodehanson4.onrender.com/registerpage
    axios
      .post('https://nodehanson4.onrender.com/registerpage',rdata)
      .then((res) => {
        
        // setStore(res.data.msg);
        alert(res.data.msg);
        
        
        if (res.data.msg === "user successfully registered") {
          localStorage.setItem('token',res.data.token)
          // alert(res.data.msg)
      }
      })
      .catch((error) => {
        console.log(error);
        // alert("User has not registered, please try again");
      });

      rdataset({
        Name: "",
        Phonenumber: "",
        Email: "",
        Password: "",
      });

  };
    
  return (
    <>
      
        <form className='r1'>
        <h3>Register and create an Account</h3>
            
        <label htmlFor="Name">Name:

        </label>
        <input type='text' name='Name' value={rdata.Name} onChange={appdata}  required/><br/>
        <label htmlFor="Phone">Phone number:
        </label>
        <input type='number' name='Phonenumber' value={rdata.Phonenumber} onChange={appdata} required  /><br/>
        <label htmlFor="Email">Email:
        </label>
        <input type='email' name='Email' value={rdata.Email} onChange={appdata} required /><br/>
        <label htmlFor="Password">Password:
        </label>
        <input type='password' name='Password' value={rdata.Password} onChange={appdata} required/><br/>
        <button type='reset'>Cancel</button>
        <button type='submit'onClick={datasubmit} >Register</button>
       
        </form>
       {/* onClick={datasubmit} */}
    </>
  )
}

export default Register
