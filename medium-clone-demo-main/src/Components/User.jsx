import React from 'react';
import {FaTwitter} from 'react-icons/fa';
import {BsMedium} from 'react-icons/bs';
import {CiSearch} from 'react-icons/ci';
import {LiaEdit} from 'react-icons/lia';
import {AiOutlineMinusCircle} from 'react-icons/ai';
import {IoNotificationsOutline} from 'react-icons/io5';
import {BiChevronDown} from 'react-icons/bi'
import{PiPlusThin} from 'react-icons/pi'
import {MdOutlineBookmarkAdd} from 'react-icons/md'
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import Profile from './Subpages/Profile';
import { useState,useEffect } from 'react';
//import data from '../data/data'
import moment from 'moment'

const User = () => {
   



   const course=["Programming","Data Science","Technology","Self Improvment","Writing","Relationship","Machine Learning","Productivity","Politics"]
   const datas=['Help',"Status","Writers","Blog","Careers","Privacy","Terms","About","Text to speech","Teams"]
    
    const [visible,setVisible]=useState(false);
    const [searchBox,setSearchBox]=useState(false)
    const[user,setUser]=useState([]);
    const [data,setData]=useState([]) //store news or titles
    const [isFixed, setIsFixed] = useState(false);

    const news_Feed=async()=>{
        try{
            const data=await((await fetch('http://localhost:5000/api/news')).json());
            setData(data);
        }
        catch(err){console.log(err)}
    }


    const handleScroll = () => {
        // Check the scroll position
        if (window.scrollY === 0) {
          setIsFixed(false); // add the "fixed" class if at the top
        } else {
          setIsFixed(true); // off the "fixed" class if not at the top
        }
    }
  
      useEffect(() => {

        
        news_Feed();//fetching news content


        //fetch user 
        const fetchData=async ()=>{
            try{ 
                const res=await fetch('http://localhost:5000/api/user')
                const res_data=await res.json();
                setUser(res_data);
            }
            
            catch(e){console.log(e)}
           }
    fetchData();    

 
    
  },[]);

  // Attach the scroll event listener
  window.addEventListener('scroll', handleScroll);

  //for staff picks
  let person=[];
  data.filter((ele,index)=>{
   if(index < 3){
       person.push(ele)
   }
  });
  
    

    const clickSearchicon=()=>{
        setSearchBox(true);
    }
    const sideShow=()=>{
        
        visible ? setVisible(false) :setVisible(true)

    }
    
    return (
        
       <>  {/**userNavbar */}
            {
            user.map((ele)=>{
                return(
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
                    <span className='ml-[1rem] text-2xl text-slate-500'><CiSearch onClick={clickSearchicon}/></span>
                </div>
                <button className='text-2xl text-slate-500 outline-none'><IoNotificationsOutline /></button>
                <div className='flex'>
                    <button><img src={ele.image} alt="" onClick={sideShow}
                    className='w-[2rem] h-[2rem] rounded-full bg-red-600'/></button>
                    <button className='' onClick={sideShow}><BiChevronDown /></button>
                
                </div>
                </div>
              </div>
            </div>
            )
            })
        }

        
            <div className='relative'>
              { searchBox && 
                <div className='p-6'>
                    <div className=' w-full md:hidden flex bg-white items-center  text-center rounded-full h-[2.5rem] border-[0.1px] border-slate-600 '>
                        <span className=' px-5 text-2xl text-slate-800'><CiSearch/></span>
                        <input type="text" placeholder='Search Medium' className=' outline-none text-sm text-start  items-center  rounded-full h-[2.2rem] w-full'/>
                    </div>
                </div>
              }

              {/**Users body part start */}


              <div className='md:flex '>
                <div className='border-r-[1px] lg:w-[72%] border-slate-300 overflow-y-auto'>
                  
                    <div className={`${isFixed? 'fixed top-0 ' :''} flex gap-[1rem] py-5 md:px-[5rem] px-[1rem] items-center text-center bg-white `}>
                       <span><a href=""><PiPlusThin className='text-xl hover:underline underline-offset-[1rem]'/></a></span> 
                        <p className='underline underline-offset-[1rem] '><a href="#" >For you</a></p>
                        <p className='hover:underline underline-offset-[1rem]'><a href="#">Following</a></p>
                        <p className='hover:underline underline-offset-[1rem]'><a href="#">Startup</a></p>
                        
                    </div>
                    
                    <div className="overflow-hidden mt-[1rem] ">
                    { 
                    data.map((ele)=>{
                        return(
                            <>  
                            <div className="container flex justify-evenly md:w-4/5  mb-8 overflow-hidden  md:ml-[3rem] md:mr-[1rem] mt-2 "> 
                                        <div className='w-full overflow-hidden px-5 '>    
                                                <div className='flex mb-1 items-center'>
                                                    <img src={`http://localhost:5000/`+ele.image} alt="" className='w-5 h-5 rounded-full bg-green-600  ml-3 mr-2'/>
                                                    <h5 className=' truncate text-sm font-bold'>{ele.title}</h5>
                                                    <span className='text-sm text-slate-300 font-thin px-3'>.  &nbsp;{moment(`${ele.publishedAt}`,'YYYYMMDD').format('MMM DD')}</span>
                                                </div>
                                                <div className='flex justify-between'>
                                                <div className='w-4/5'>
                                                <h1 className='font-extrabold truncate ml-[0.9rem]'>{ele.title}</h1>
                                                <div className='line-clamp-3  ml-[0.9rem] mt-1 text-slate-500'>
                                                    {ele.subtitle}
                                            
                                                </div>
                                                
                                                </div>
                                                <img src={`http://localhost:5000/`+ele.image} alt="" className='md:w-45 mt-5 md:h-35 w-32 h-20 ovrerflow-hidden' />
                                                </div>
                                                <div className="flex justify-between text-sm text-center mt-2 ">
                                                <div className='ml-[0.9rem] mt-[0.10rem] text-slate-500'>

                                                <span className=''>
                                                
                                                {moment(`${ele.publishedAt}`,'YYYYMMDD ').fromNow()}
                                                </span>
                                                {ele.catagory.map((item)=>{
                                                    return <span className='md:border rounded-full bg-slate-100 px-1 ml-2 lg:order-2'>{item}</span>
                                                })}
                                                
                                                </div>
                                                
                                                <div className='flex justify-center items-center  text-xl text-slate-500 gap-3 font-thin'>    
                                                <MdOutlineBookmarkAdd/>   
                                                <AiOutlineMinusCircle/>
                                                <BiDotsHorizontalRounded/>
                                                </div>    
                                                </div>
                                        </div>

                                        

                                        
                                
                            </div>
                            <hr className='border-b-[0.5px] border-slate-50  mb-5 lg:mx-[2rem]'/>
                            
            
                            </>
                        )
                    })
                    
                } 
                    </div>
                </div>

                {/**right part */}
                <div className='lg:w-[28%]  sticky hidden lg:flex p-5'>
                <div className=''>
                    <h2 className='font-semibold mb-1'>Staff Picks</h2>
                    <div className='grid grid-cols mt-5  mr-[2rem] '>
         {
            person.map((ele,i)=>{
                return(
                    <>
                    <div className='space-x-1'>      
            <div className='flex w-[75%] '>
                <div className='flex'>
                    <img src={`http://localhost:5000/`+ele.image} alt="" className='w-5 h-5 rounded-full bg-green-600 mt-2  mr-2'/>
                    <h5 className='mt-[6px] font-[5px] '>{ele.title}</h5>
                </div>
            </div> 
            <div className='font-bold line-clamp-2 overflow-hidden '>
                {ele.subtitle}
            
            </div>
            <div className='text-slate-400 '>
            {moment(`${ele.publishedAt}`,'YYYYMMDD').format('MMM DD')}
            </div>
                    </div>
                    </>
                )
            })
         } 

             <h3 className='text-sm p-3 text-green-600'>See the full list</h3>
             <div className='flex justify-center items-center text-4xl'>
                <span><BsMedium/></span>
                <span><PiPlusThin className='text-xl'/></span>
                <span><FaTwitter className='text-blue-500 text-2xl'/></span>
             </div>
             <p className='md:px-[5rem] px-[2.5rem]'>Discover Medium writers you already follow on Twitter.</p>
             <div className='flex justify-center items-center mt-5'>
             <div className='w-[16rem] h-[3rem] border-black border-[1px] mb-1 rounded-full mt-[1rem] flex align-middle justify-center"'>
                    <a href="" className='flex align-middle gap-[3rem]'> <span className='text-blue-500 ml-[1rem] mt-3 text-2xl'><FaTwitter /></span>
                    <p className='mt-3'> Connect to Twitter</p></a>
                    
             </div>
             
             </div>
             <div className='flex justify-center items-center p-6 mt-5 text-sm underline border-b-[1px] border-slate-200'>
                <p className='cursor-pointer'>Maybe later</p>
             </div>
             <h3 className='p-3 font-bold text-md'>Recommended topics</h3>

             <div className="flex flex-wrap gap-3 font-xl text-sm text-center p-3">
                {
                    course.map((ele)=>{
                    return(
                        <>
                        <button className='rounded-full bg-slate-300  w-auto p-2'>{ele}</button>
                        </>
                    )
                })}
                
               
            </div>
            <p className='text-sm text-green-700 font-semibold p-3'>See more topic</p>
            <h2 className='p-3 font-bold'>Who to follow</h2>
            <div>
            {
            person.map((ele,i)=>{
                return(
                    <>
                    <div className='space-x-[3rem]'>      
            <div className='flex w-[55%]'>
                <div className='flex'>
                    <img src={`http://localhost:5000/`+ele.image} alt="" className='w-5 h-5 rounded-full bg-green-600 mt-2 ml-3 mr-2'/>
                    <h5 className='mt-[6px] font-bold'>{ele.title}</h5>
                </div>
               
            </div> 
            <div className='flex justify-among mr-5 '>
            <div className='text-sm  overflow-x-hidden md:w-[15rem] '>
                {ele.title}
               
            </div>
            <div className='p-2 w-auto'>
            <button className='border-[1px] px-2  rounded-full  border-slate-500 text-center ' >follow</button>
            </div>
            </div>
            
            
            </div>
                    </>
                )
            })
         } 
            </div>
            <p className='text-sm text-green-700 font-semibold p-3 cursor-pointer'>See more suggestions</p>
            <h2 className='p-3 font-semibold '>Reading more</h2>
            <span>
            <MdOutlineBookmarkAdd className='text-2xl ml-[2.8rem] '/>
            </span>
            <p className='p-3 mt-[-2rem]'>Click &nbsp; &nbsp; &nbsp;on any story to easily add it to your reading list or a custom list 
            that you can share.
            </p>
              <div className='flex flex-wrap gap-2 px-3'>
                {
                   datas.map((ele)=>{
                    return(
                        <>
                        <div className='text-sm '>
                        <a href='#'>{ele}</a>
                        </div>
                        </>
                    )
                   })
                }
                </div>
         </div>
                </div>
              
            
              </div>
              </div>
            
            {/**users body end */}

            {/**Profile tamplet is only for Sidebar*/}
             {visible && <Profile/> }
             
 
            </div>
             


       </>
    );
}

export default User;