import {useState,useEffect}  from 'react';
import moment from 'moment';

import Course from './Course'
import { MdOutlineBookmarkAdd} from 'react-icons/md'
//import data from '../data/data'
const NewsCont = () => {
    const [data,setData]=useState([]);
    const news_Feed=async()=>{
        try{
            const data=await((await fetch('http://localhost:5000/api/news')).json());
            setData(data);
        }
        catch(err){console.log(err)}
    }

    const[noOfItem,setItem]=useState(15)
    const slice=data.slice(0,noOfItem)
    const loadMore=()=>{
        setItem(noOfItem+noOfItem)
    }

    useEffect(()=>{
        news_Feed()
    },[])
 
    return (
       
        <> 
       <div className='md:flex w-full md:p-5 p-3 border-t-[1px] border-slate-400 ' >
       
         <div className="md:w-[35%] md:flex md:mr-2 md:order-2">
                <Course />
         </div>
        <div className="md:flex md:mt-[3rem] md:w-[65%] md:order-first">
            <div className="overflow-hidden mt-[1rem]" >
            {
            slice.map((ele)=>{
                return(
                    <>
                
                    <div className="container flex justify-evenly md:w-4/5  h-28 mb-8 overflow-y-hidden  md:ml-[4rem] mr-[1rem]">
                                <div className=' h-38 w-3/5 overflow-hidden '>    
                                        <div className='flex'>
                                            <img src={`http://localhost:5000/`+ele.image} alt="" className='w-5 h-5 rounded-full bg-green-600 mt-2 ml-3 mr-2'/>
                                            <h5 className='mt-[6px]  text-sm font-bold'>{ele.title}</h5>
                                        </div>
                                        <h1 className='font-extrabold truncate ml-[0.9rem]'>{ele.title}</h1>
                                        <div className='line-clamp-2 ml-[0.9rem] mt-1 text-slate-500'>
                                            {ele.subtitle}
                                        </div>
                                        <div className="flex justify-between">
                                        <div className='ml-[0.9rem] mt-1 text-slate-500'>
                                        {moment(`${ele.publishedAt}`,'YYYYMMDD').format('MMMDD')},&nbsp;
                                        {moment(`${ele.publishedAt}`,'YYYYMMDD').startOf('hour').fromNow('mm')}
                                        </div>         
                                        <MdOutlineBookmarkAdd className='mt-[0.7rem] text-2xl font-thin text-slate-500'/>   
                                        </div>    
                                 </div>

                                    <img src={`http://localhost:5000/`+ele.image} alt=""  className='object-contain'/>
                                
                            
                            
                    </div>
                    
    
                    </>
                )
            })
            
        } 
            </div>
            
        </div>
            
        </div>
        <div className='flex item-center justify-center p-4 md:hidden'>
            <button onClick={loadMore}
            className='rounded-full border-[1px] border-gray-700 shadow-md text-center p-2'>Load more stories</button>
        </div>
        </>
    );
}

export default NewsCont;
