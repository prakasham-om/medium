import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Sendfeed=()=>{
    const navigate=useNavigate();
    const [feed,setFeed]=React.useState({title:'',subtitle:'',image:'',catagory:[]});
    const [cat,setCatagory]=React.useState([]);
    const [imageFile,setImageFile]=React.useState('')
    const catagories=["Notification","Programming","Busniess", "Politics"]
    
      const handleChange=(e)=>{
      const{name,value}=e.target
      setFeed(({...feed,[name]:value}));  
    }

    //catagory add to array
    const handleCatagory=(event)=>{
          const   newItem=event.target.value ;
          if(!cat.includes(newItem)){
                setCatagory([...cat,newItem])
                setFeed({...feed,catagory:[...cat,newItem]});
             }
    }
    //remove catagory
        const removecatagory=(option)=>{
        const removeItem=cat.filter((item)=> item !==option);
        setCatagory(removeItem);
     }

    const imagHandler=(e)=>{
      //setImageFile(file);
      setFeed({...feed,image:e.target.files[0]})
    }
   // console.log(imageFile);

  
  
   let  postData=async(e)=>{
        e.preventDefault();
        const formData=new FormData();
        formData.append('title',feed.title)
        formData.append('subtitle',feed.subtitle)
        formData.append('catagory',feed.catagory)
        formData.append('image',feed.image)

        try {
          await axios.post('http://localhost:5000/api/poststory', formData);
         // alert('Data submitted successfully');
          setTimeout(()=>{
            navigate('/user')
          },2000)
        } catch (error) {
          console.error('Error submitting data:', error);
        }
   }
  
  
return(
    <>
   

<div class="w-full lg:px-[10rem] lg:mt-5">
  <form method='POST'
  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
        Title
      </label>
      <input name='title' onChange={handleChange}
             value={feed.title}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Title" />
    </div>
    <div class="mb-6">
      <label className="block text-gray-700 text- sm font-bold mb-2" for="subtitle">
        Tell your story
      </label>
      <textarea name='subtitle' onChange={handleChange}
                value={feed.subtitle}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" id="subtitle" type="text" placeholder='Tell your story...' />

    </div> 
    <div className="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="image">
        Image
      </label>
      <input name='image'
             onChange={imagHandler}
      className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" id="image" type="file"  />

    </div>
    <div className='mb-6'>
    <label class="block text-gray-700 text-sm font-bold mb-2" for="catagory">
        Select catagory
      </label>
        <select name='catagory'
                className='border rounded p-1'
                onChange={handleCatagory}
                value={feed.catagory}
        >
            {
                catagories.map((option,index)=>{
                    return  <>
                                <option key={index}
                                        value={option}
                                >{option}</option>
                            </>
                })
            }
        </select>
    </div>
    <div className='flex flex-wrap gap-2 mb-8'>
            
                {cat.map((ele,indx)=>{
                    return  <span key={indx}
                                  className='border rounded-full p-1 bg-blue-500 border-1 border-green-400 text-white'
                            >
                                {ele}
                                <button 
                                className='px-[0.5rem] border rounded-full ml-2 hover:text-black bg-green-500 hover:bg-orange-600'
                                onClick={()=>removecatagory(ele)}>X</button>
                            </span>
                })}
    </div>
    <input type='submit' 
            onClick={postData}
          className='bg-green-300 px-5 py-1 rounded font-bold' value='Post'/>
  </form>
  
</div>
    </>
)

}

export default Sendfeed;