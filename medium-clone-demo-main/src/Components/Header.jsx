import React from 'react';
import {FiTrendingUp} from 'react-icons/fi'
import {CgReadme} from 'react-icons/cg'
import data from '../data/data';
const Header = () => {
    let user=[];
   data.filter((ele,index)=>{
    if(index < 6){
        user.push(ele)
    }
   });
    return (
        < >

        <div className='md:ml-[5rem] md:mr-[5rem]  mb-11 ml-[1rem]'>
            <div className='flex mt-8 '>
            <div className='flex justify-center items-center w-5 h-5 rounded-full border-slate-950 border-[0.5px] font-thin'>
            <FiTrendingUp /></div><h5 className='ml-3 font-bold'>Trending on Medium</h5>
            </div>            
        
         <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5  mt-5 md:w-full truncate  mr-[2rem]'>
         {
            user.map((ele,i)=>{
                return(
                    <>
                    <div className='space-x-[3rem]'>      
            <div className='flex'>
                <div className='text-3xl  text-slate-200 hover:text-gray-400 font-bold'> 0{(i+1)}</div>
                <div className='flex'>
                    <img src={ele.urlToImage} alt="" className='w-5 h-5 rounded-full bg-green-600 mt-2 ml-3 mr-2'/>
                    <h5 className='mt-[6px] font-[5px]'>{ele.author}...</h5>
                </div>
            </div> 
            <div className='truncate font-bold'>
                {ele.title}
            
            </div>
            <div className='text-slate-400'>
                {ele.publishedAt}
            </div>
         </div>
                    </>
                )
            })
         } 
           
         
         </div>
         </div>                     
        </>
    );
}

export default Header;
