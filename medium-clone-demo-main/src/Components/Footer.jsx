import React from 'react';
import {BsMedium} from 'react-icons/bs'
import {FaApple,FaGooglePlay} from 'react-icons/fa'
const Footer = () => {
    return (
        <>
            <div className='space-y-2 py-5 bg-black md:hidden text-white'>
                <div className='flex ml-5 '>
                    <span><BsMedium className='w-[2.5rem] text-[2rem]'/></span>
                    <h3 className='font-serif text-[1.3rem] font-bold'>Medium</h3>
                </div>
                <div className='flex justify-start items-center space-x-2 ml-5 '>
                    <a href="#">About</a>
                    <a href="#">Help</a>
                    <a href="#">Term</a>
                    <a href="#">Privacy</a>
                </div>
                <h4 className='ml-5 text-sm font-bold font-serif'>Get the Medium app</h4>
                <div className='border-[1px] border-slate-800 ml-4 mr-5'></div>
                    <div className='flex text-white ml-5 gap-3'>
                        <button className='flex gap-1 bg-black  w-[7.5rem] h-[2.5rem] border-white rounded border-[1px] shadow-md'>
                        <span className='text-2xl  mt-1 ml-[2px]'>
                        <FaApple />
                        </span>
                        <div>
                        <p className='text-xs grid-cols-1'>Download on</p>
                        <p className='text-sm mt-[-4px] ml-[-4px] font-bold'>App Store</p>
                        </div>
                        </button>
                        <button className='flex gap-1 bg-black  w-[7.5rem] h-[2.5rem] border-white rounded border-[1px] shadow-md'>
                        <span className='text-2xl  mt-1 ml-[2px] '>
                        <FaGooglePlay  />
                        </span>
                        <div>
                        <p className='text-xs grid-cols-1'>Get on</p>
                        <p className='text-sm mt-[-4px] ml-[-4px] font-bold'>Google Play</p>
                        </div>
                        </button>
                        
                    </div>
            </div>
            
           
        </>
    );
}

export default Footer;
