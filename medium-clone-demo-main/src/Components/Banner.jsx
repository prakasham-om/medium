import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import AnimationM from "./AnimationM";
const Banner = () => {
  const navigate=useNavigate()
  const goToSignin=()=>{
    navigate('/signin');
  }
  return (
    <>

    <div className="bg-yellow-500 w-full  h-[450px] flex border-b-[1px] border-black">
      <div className=" w-full lg:w-1/2 flex justify-center items-center pl-10 md:pl-20 space-y-8">
        <div className="space-y-5">
          <h1 className=" text-6xl md:text-8xl font-serif"> Stay curious.</h1>
            <h3 className="  md:text-2xl md:mr-8 md:pr-16  ">
                Discover stories, thinking, and expertise from writers on any topic.
             </h3>
        
          <button onClick={goToSignin}
          className="text-white bg-black rounded-full px-10 py-2 mt-4 font-bold text-lg ">
            Start reading 
          </button>
        </div>
      </div>
      <div className=" w-1/2  hidden lg-flex   overflow-hidden ml-5">
        <AnimationM />     
      </div>
      
    </div>
    
    </>
  );
};

export default Banner;



