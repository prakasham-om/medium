import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { BsMedium } from 'react-icons/bs';
const Navbar = () => {
  let navigate=useNavigate();
  let navToSigngin=()=>{
    
    navigate("/signin")
     
  }
  
  return (
    <>
    <div className='w-full bg-yellow-500 py-4  border-b border-black fixed '>
    <div className='mx-auto max-w-7xl mt-2         '>
        <div className='flex items-center justify-between px-2'>
            <span className='text-5xl flex text-center align-middle justify-center gap-1'><BsMedium/>
              <h3 className='font-serif text-3xl mt-[0.35rem]'>Medium</h3>
            </span>
            <div className='flex justify-end items-center w-full'> 
            <div className='hidden md:flex space-x-6 items-center mr-8 '>
              <ul className='flex gap-x-6 hover:cursor-pointer'>
              <li><Link to="ourstory">Our Story</Link></li>
              <li><Link to="membership">Membership</Link></li> 
              <li><Link to="/post"><li>Write</li></Link></li>
              <li><Link to="/login"><li>Sign In</li></Link></li> 
              </ul>
            </div>
            <button onClick={navToSigngin} className='text-white bg-black rounded-full lg:py-3 lg:px-6 py-2 px-4'> Get Started </button>
            </div>
        </div>
        </div>
    </div>
  </>
  )
}

export default Navbar