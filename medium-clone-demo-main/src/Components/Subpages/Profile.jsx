import React from 'react';
import {LuUser} from 'react-icons/lu'
import {LiaEdit} from 'react-icons/lia'
import {IoReaderOutline} from 'react-icons/io5'
import {PiBookmarksSimpleLight} from 'react-icons/pi'
import {HiOutlineChartBar} from 'react-icons/hi'
import { useNavigate } from 'react-router-dom';
const Profile = () => {
    const data=["Status",'Writers','Blog','Careers','Privacy','Terms','About','Text to speech','Teams']

    const navigate=useNavigate()
    const moveToPost=()=>{
        navigate('/post')
    }
    const logoutUser=async()=>{
            window.location.href='http://localhost:5000/logout'  
        }

      
        
   
    return  (
        <>
            
            <div className='lg:w-1/5 w-3/5 bg-white grid grid-cols items-end overflow-y-scroll text-sm text-slate-600  absolute -right-[-0.30rem] top-[-0.30rem] rounded shadow-xl border-[1px] border-slate-200 '>    
              
                <div className='grid grd-cols py-3 gap-5 p-5'>
                    <div className='flex items-center text-md gap-3 mt-3 md:hidden'>
                        <button onClick={moveToPost}
                        className='flex text-center justify-items-center  px-3 text-2xl outline-none w-full '><LiaEdit /><p className='text-sm ml-2 mt-1' >Edit</p></button>
                        
                    </div>
                    <span className='border-b-[1px]  border-slate-200 w-[1rem] px-3 ml-3 md:hidden'></span>
                    <div className='flex items-center text-md gap-3 mt-3'>
                        <button className='flex text-center justify-items-center  px-3 text-2xl outline-none w-full '><LuUser/><p className='text-sm ml-2 mt-1' >Profile</p></button>
                    </div>
                    <div className='flex items-center text-md gap-3'>
                        <button className='flex text-center justify-items-center  px-3 text-2xl outline-none w-full '><PiBookmarksSimpleLight/><p className='text-sm ml-2 mt-1' >Library</p></button>
                    </div>
                    <div className='flex items-center text-md gap-3'>
                        <button className='flex text-center justify-items-center  px-3 text-2xl outline-none w-full '><IoReaderOutline/><p className='text-sm ml-2 mt-1' >Story</p></button>
                    </div>
                    <div className='flex items-center justify-center align-middle text-md   '>
                        <button className='flex text-center justify-items-center  px-3 text-2xl outline-none w-full text-slate-500'><HiOutlineChartBar/><p className='text-slate-600 text-sm ml-2 mt-1' >Stats</p></button>
                    </div>
                </div>
                <div className=' grid grid-cols text-md  border-t-[2px] border-slate-100 mt-2'>
                       <div className='p-5'>
                        <button className='w-full  text-start px-3 py-1'>Setting</button>
                        <button className='w-full  px-3 py-1 text-start'>Refine recommendation</button>
                        <button className='w-full  px-3 py-1 text-start'>Manage publications</button>
                       <button className='w-full  px-3 py-1 text-start'>Helps</button>
                    </div> 
                </div>
                <div className=' grid grid-cols text-md  border-t-[2px] border-slate-100 mt-2'>
                    <div className='p-5'>
                        <button className='w-full  text-start px-3 py-1 '> Become a Member</button>
                        <button className='w-full  px-3 py-1 text-start'>Create a Mastodon account</button>
                        <button className='w-full  px-3 py-1 text-start'>Apply for author verification</button>
                       <button className='w-full  px-3 py-1 text-start'>Apply for the Partner Program</button>
                       <button className='w-full  px-3 py-1 text-start'>Gift a membership</button>
                    </div>
                </div>
                <div className=' grid grid-cols text-md  border-t-[2px] border-slate-100 mt-2'>
                    <div className='p-4'>
                        <button onClick={logoutUser}  className='w-full  text-start px-3 py-1 mt-3'>Sign out</button>
                        <button className='w-full  px-3 py-1 text-start'>email</button>
                    </div>                
                </div> 
                <div className=' md:hidden flex gap-2 text-xs flex-wrap p-2 bg-slate-200 border-t-[2px] border-slate-100 mt-2'>
                    {
                        data.map((ele)=>{
                            return(
                                <>
                                    <a href="">{ele}</a>
                                </>
                            )
                        })
                    }
                </div>   
            </div>
        </>
    );
}

export default Profile;
