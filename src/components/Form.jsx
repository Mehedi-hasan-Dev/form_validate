import React, { useState } from 'react'


export default function Form() {
    
    const [user,setUser] =useState({
        firstName : "",
        lastName : "",
        email : "",
        password : "",
    })

 const handleBlur = (e) =>{
    const name = e.target.name;
    const value = e.target.value;

    const newUser = {...user};
    newUser[name] = value;
    setUser(newUser);
 }


 const handleSubmit =(e) =>{
    e.preventDefault();


    
 }

  return (
    <div>
      
       <div className="flex flex-col items-center justify-center h-screen">
         <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 capitalize">Give Me Your Information or give me your money</h2>

          <form action="" className="flex flex-col">
            <input  placeholder="First Name" name='firstName' onBlur={handleBlur}  className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text"  />
            <input  placeholder="Last Name" name='lastName' onBlur={handleBlur}  className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text"  />
            <input placeholder='Email' name='email' onBlur={handleBlur} className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"  type="email"/>
            <input type="password" placeholder='Password' name='password'  onBlur={handleBlur} required className='bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150'/>
            <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit" onClick={handleSubmit}>Submit</button>
          </form>

          <div className="mt-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Are you sure those are your Info's?</h3>
            <p><strong>First Name:</strong> {user.firstName}</p>
            <p><strong>Last Name:</strong> {user.lastName}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </div>
         </div>
       
       </div>



    </div>
  )
}
