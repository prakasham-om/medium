import React from 'react';
import { BsMedium } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import {AiOutlineArrowRight} from 'react-icons/ai'
const Ourstory = () => {
    let navigate=useNavigate();
    let logInhandler=()=>{
        navigate('/login')
    }
    let signInhandler=()=>{
        navigate('/signin')
    }
    let homePage=()=>{
        navigate('/')
    }
    return (
        <>
        <div className='bg-black text-white h-screen'> 
        <div className='w-full bg-black py-4  border-b border-white'>
        <div className='mx-auto max-w-7xl mt-2         '>
            <div className='flex  justify-brtween'>
                <div className='flex text-white items-center justify-center align-middle text-xl md:text-4xl'>
                    <span className=' '><BsMedium/></span>
                    <h4 className='ml-5  font-serif'>Medium</h4>
                </div>
                <div className='flex justify-end items-center w-full'> 
                <div className='flex space-x-6 items-center  '>
                <button onClick={logInhandler}
                className='text-white bg-transparent hover:bg-slate-300 rounded-full lg:py-3 border-[1px]  lg:px-8 py-1 px-2 border-gray-200'> Signin </button>
                <button onClick={signInhandler}
                 className='text-slate-700 hover:bg-slate-200 bg-white rounded-full lg:py-3 lg:px-8 py-1 px-2'> Sign Up </button>
                </div>
                </div>
            </div>
            </div>
    
    
        </div>
        <div className='mb-[5rem] md:mb-[15rem] md:mt-[8rem] mt-[5rem] '>
            <div className="grid lg:grid-cols-2 gap-5 md:ml-[2rem] ml-[0.9rem] mr-[0.4rem]">
            <div className="grid ">
            <h2 className=" text-5xl md:text-7xl font-[48px] font-serif">Everyone has a <br/>story to tell.</h2>
            <p className='md::text-2xl font-serif mt-[3rem]'>Medium is a home for human stories and ideas. Here, anyone can share insightful perspectives, useful knowledge, and life wisdom with the world—without building a mailing list or a following first. The internet is noisy and chaotic; Medium is quiet yet full of insight. It’s simple, beautiful, collaborative, and helps you find the right audience for whatever you have to say.</p>
            <p className='md:text-2xl font-serif mt-[3rem]'>We believe that what you read and write matters. Words can divide or empower us, inspire or discourage us. In a world where the most sensational and surface-level stories often win, we’re building a system that rewards depth, nuance, and time well spent. A space for thoughtful conversation more than drive-by takes, and substance over packaging.</p>
            <h4 className='md:text-4xl text-2xl mt-[3rem]'>Ultimately, our goal is to deepen our collective understanding of the world through the power of writing.</h4>
            <p className='md:text-2xl font-serif mt-[3rem]'>Over 100 million people connect and share their wisdom on Medium every month. Many are professional writers, but just as many aren’t — they’re CEOs, computer scientists, U.S. presidents, amateur novelists, and anyone burning with a story they need to get out into the world. They write about what they’re working on, what’s keeping them up at night, what they’ve lived through, and what they’ve learned that the rest of us might want to know too.</p>
            <p className='md:text-2xl font-serif mt-[3rem]'>Instead of selling ads or selling your data, we’re supported by a growing community of <u>Medium members</u> who align with our mission. If you’re new here, <u>start exploring</u>. Dive deeper into whatever matters to you. Find a post that helps you learn something new, or reconsider something familiar—and then <u>share your own story.</u></p>
            </div>
            </div>
        </div>
        
        <div  onClick={homePage}
        className='border-t-[1px] h-[5rem] md:h-[10rem]  flex align-middle justify-between mb-4 lg:hover:bg-white hover:text-black'>
            <h3 className='md:text-6xl text-2xl  mt-7 ml-[0.9rem] md:mt-[3rem] md:ml-[2rem] font-bold font-serif'>Start Exploring</h3>
            <div className='md:mt-[5rem] m-[2.5rem]'>
            <AiOutlineArrowRight />
            </div>
        </div>

        <div onClick={logInhandler}
         className='border-t-[1px] h-[5rem]  md:h-[10rem] flex align-middle justify-between md :hover:bg-white hover:text-black'>
            <h3 className='md:text-6xl   mt-7 text-2xl ml-[0.9rem]  md:ml-[2rem] md:mt-[3rem] font-bold font-serif'>Tell your story</h3>
            <div className='md:mt-[5rem] m-[2.5rem]'>
            <AiOutlineArrowRight />
            </div>
        </div>
        <div className='border-t-[1px] h-[5rem] md:h-[10rem]  flex align-middle justify-between mb-4 lg:hover:bg-white hover:text-black'>
            <h3 className='md:text-6xl text-2xl mt-7 ml-[0.9rem] md:mt-[3rem] md:ml-[2rem] font-bold font-serif'>Become a member</h3>
            <div className='md:mt-[5rem] m-[2.5rem]'>
            <AiOutlineArrowRight />
            </div>
        </div>
        </div>
        </>
      )
}

export default Ourstory;
