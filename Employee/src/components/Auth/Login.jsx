import React, { useState } from 'react'

export default function Login() {

const [email,setEmail]=useState("");
const handleChange=(e)=>{
console.log(e.target.value);
}
  return (
<>
<div className=' flex items-center justify-center w-screen h-[80vh] '>
<form className='flex items-center flex-col justify-center border border-green-700 p-10 rounded-lg'> 
  <h1 className='text-center text-green-500 font-bold'>Login </h1>
    <input type="email" placeholder='enter your email' className='outline-none border border-green-700 rounded-lg p-1 m-3 bg-transparent text-green-900 cursor-pointer placeholder:text-green-700' ></input>
    <input type="password" placeholder='enter your password'  className='outline-none border border-green-700 rounded-lg p-1 m-3 bg-transparent text-green-900 cursor-pointer placeholder:text-green-700'  ></input>
    <button type="submit" className='border border-green-500 rounded bg-green-700 text-white p-1 ps-2' onSubmit={handleSubmmit(e)} >Login</button>
</form>
</div>

</>

)
}
