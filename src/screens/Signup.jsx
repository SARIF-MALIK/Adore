import {React, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";

function Signup() {
  const [creden, setCreden] = useState({email:'', password:''})
  let navigate = useNavigate();
  const inputChange = (e)=>{
      setCreden({...creden, [e.target.name]:e.target.value})
  } 
  const handleSubmit = async(e)=>{
      e.preventDefault();

      const response = await fetch('#',{
        method:'post', 
            headers : {
                "Content-Type" : "application/json"
            },    
            body:JSON.stringify({email:creden.email, password:creden.password})
          })
      const json = await response.json()
      console.log(json); 
          
      if(!json.success){
          alert("Enter valid Credentials")
      }
      if(json.success){
        localStorage.setItem("userEmail", creden.email)
        localStorage.setItem("authToken", json.authToken); 
        console.log(localStorage.getItem('authToken')); 
        navigate('/')
      }
  }
  return (
    <div className='container h-screen w-screen flex justify-center items-center bg-[url("/assets/loginBg.jpg")]' >
    <form onSubmit={handleSubmit} className='border rounded-lg py-5 px-3 w-full md:w-2/4 lg:w-1/4  bg-transparent backdrop-blur-lg text-white'>
        <h1 className='text-center poppins-5 text-xl'>Register</h1>
        <div className="mb-3 flex border rounded-full items-center px-5 py-3 my-5">
            {/* <label htmlFor="email" className="form-label">Email address :</label> */}
            <input type="text" className=" px-3 w-full outline-none bg-transparent poppins-5 placeholder:text-white" name ='name' id="name" placeholder="Enter your name" onChange={inputChange}/>
            <FaUser size={22} className=''/>
        </div>
        <div className="mb-3 flex border rounded-full items-center px-5 py-3 my-5">
            {/* <label htmlFor="email" className="form-label">Email address :</label> */}
            <input type="email" className=" px-3 w-full outline-none bg-transparent poppins-5 placeholder:text-white" name ='email' id="email" placeholder="Enter your email" onChange={inputChange}/>
            <MdEmail size={22} className=''/>
        </div>
        <div className="mb-3 flex border rounded-full items-center px-5 py-3 my-5">
            {/* <label htmlFor="email" className="form-label">Email address :</label> */}
            <input type="number" className=" px-3 w-full outline-none bg-transparent poppins-5 placeholder:text-white" name ='contact' id="contact" placeholder="Contact Number" onChange={inputChange}/>
            <IoCall size={22} className=''/>
        </div>
        <div className="mb-3 flex border rounded-full items-center px-5 py-3 my-5">
            {/* <label htmlFor="email" className="form-label">Email address :</label> */}
            <input type="text" className=" px-3 w-full outline-none bg-transparent poppins-5 placeholder:text-white" name ='location' id="location" placeholder="Enter your Location" onChange={inputChange}/>
            <ImLocation2 size={22} className=''/>
        </div>
        <div className="mb-3 flex border rounded-full items-center px-5 py-3 my-5">
            {/* <label htmlFor="password" className="form-label">Password :</label> */}
            <input type="password" className=" px-3 w-full outline-none bg-transparent poppins-5 placeholder:text-white" name='password' id="password" placeholder="Password" onChange={inputChange}/>
            <FaLock size={22} className=''/>
        </div>
            <button type="submit" className="btn bg-white text-black poppins-5 font-semibold w-full rounded-full mt-5">Register</button>
            <div class="register-link poppins-4 flex justify-center">
                <p>Already have an account? <Link to="/login" className='text-[green] poppins-5'>Login</Link></p>
            </div>
  </form>
</div>
  )
}

export default Signup