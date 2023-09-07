import React from 'react';

const Course = () => {
    const course=["Programming","Data Science","Technology","Self Improvment","Writing","Relationship","Machine Learning","Productivity","Politics"]
    

const data=['Help',"Status","Writers","Blog","Careers","Privacy","Terms","About","Text to speech","Teams"]
    return (
        <>
        <div className='p-5 md:p-3 md:'>
            <h3>Discover more of what matters to you</h3>
            <div className="flex flex-wrap gap-3 font-xl text-sm text-center ">
                {course.map((ele)=>{
                    return(
                        <>
                        <button className='rounded-full bg-slate-300  w-auto p-2'>{ele}</button>
                        </>
                    )
                })}
                
               
            </div>
            <h4 className='mt-4 text-green-500'>See more topics</h4>
                <div className='flex flex-wrap gap-2'>
                {
                   data.map((ele)=>{
                    return(
                        <>
                        <div className='hidden md:flex'>
                        <a href='#'>{ele}</a>
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

export default Course;
