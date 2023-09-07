import React from 'react';
import {BsMedium} from 'react-icons/bs';
import {CiSearch} from 'react-icons/ci';
import {LiaEdit} from 'react-icons/lia';
import {IoNotificationsOutline} from 'react-icons/io5';
import {BiChevronDown} from 'react-icons/bi'
const Usernav = () => {
    return (
        <>
            <div className='w-full bg-white py-1  border-b border-slate-100'>
              <div className='flex justify-between md:px-[2rem] px-[1rem]  '>
                <div className='flex gap-3 justify-center items-center'>
                    <span className='text-5xl '><BsMedium/></span>
                    <div className='bg-slate-100 items-center border-none text-center hidden md:flex rounded-full h-[2.5rem] w-[12rem]'>
                        <span 
                        className='ml-[1rem]  text-2xl text-slate-400 outline-none'><CiSearch /></span>
                        <input type="text" placeholder='Search Medium' className='bg-slate-100 outline-none text-sm text-start ml-[0.7rem] items-center hidden md:flex rounded-full h-[2.5rem] w-[12rem]'/>
                    </div>
                </div>
                 <div className='flex justify-end items-center w-full md:gap-8 gap-5'> 
            
                <button className= ' hidden md:flex ml-[1rem] outline-none text-3xl items-center text-slate-500'><LiaEdit/>
                    <p className='hidden md:flex text-slate-500 text-sm '>Write</p>
                </button>
                <div className='md:hidden flex s items-center  '>
                    <span className='ml-[1rem] text-2xl text-slate-500'><CiSearch /></span>
                </div>
                <button className='text-2xl text-slate-500 outline-none'><IoNotificationsOutline /></button>
                <div className='flex'>
                    <button><img src='' alt=''
                    className='w-[2rem] h-[2rem] rounded-full bg-red-600'/></button>
                    <button className='' ><BiChevronDown /></button>
                
                </div>
                </div>
              </div>
            </div>
        </>
    );
}

export default Usernav;
