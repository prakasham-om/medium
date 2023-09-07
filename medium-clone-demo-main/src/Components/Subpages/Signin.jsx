import { FcGoogle } from 'react-icons/fc';
import {FaFacebook} from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai';
import {RxCross2} from 'react-icons/rx'
import {useNavigate } from 'react-router-dom';
const Signin = () => {
    const navigate=useNavigate()
 
    const handleClick=()=>{
        //alert('hello')
        window.location.href='http://localhost:5000/auth/google'
    }
    const goBack=()=>{
        navigate('/')
    } 
    return (
        <>
        
        <pre></pre>
        <div className="flex justify-center align-middle items-center  backdrop-blur-sm ">
            <div className="flex flex-col lg:w-1/2 bg-white md:border-[1px] border-slate-300 justify center items-center align-middle ">
            <div className='ml-auto  mr-8 text-xl mt-[2rem]'>
                <RxCross2 onClick={goBack}/>
            </div>
            
            
                <h2 className='m-auto  font-serif lg:text-2xl text-xl mt-[7rem] lg:mt-[2rem] mb-[5rem]'>Join Medium.</h2>
                <button onClick={handleClick}
                className='w-[16rem] h-[3rem] border-black border-[1px]  rounded-full mt-[1rem] flex align-middle justify-center"'>
                    <a href="" className='flex align-middle gap-[3rem]'> <span className='ml-[1rem] mt-3 text-2xl'><FcGoogle /></span>
                    <p className='mt-3'> Signup with Google</p></a>
                </button>
                <button className='w-[16rem] h-[3rem] border-black border-[1px] mb-1 rounded-full mt-[1rem] flex align-middle justify-center"'>
                    <a href="" className='flex align-middle gap-[3rem]'> <span className='text-blue-500 ml-[1rem] mt-3 text-2xl'><FaFacebook /></span>
                    <p className='mt-3'> Signup with Facebook</p></a>
                    
                </button>
                <button className='w-[16rem] h-[3rem] border-black border-[1px] mb-1 rounded-full mt-[1rem] flex align-middle justify-center"'>
                    <a href="" className='flex align-middle gap-[3rem]'> <span className='text-slate-800 ml-[1rem] mt-3 text-2xl'><AiOutlineMail /></span>
                    <p className='mt-3'> Signup with Google</p></a>
                </button>
                <h2 className='text-md font-medium text-slate-800 ml-1 mt-3 '>Already have an acoount? &nbsp;<span className='font-bold text-green-700'>Sign in</span></h2>
                <p className='md:p-[8rem] p-[5rem] text-slate-600 text-xs'>Click “Sign Up” to agree to Medium’s <u>Terms of Service </u> and acknowledge that  Medium’s <u> Privacy Policy </u> applies to you.</p>   
           
            
            </div>
          
            </div>
           
        
        </>
    );
}

export default Signin;
