import React, { useEffect, useState } from 'react';
import {AiOutlineRight} from 'react-icons/ai'
import {GiSelfLove} from 'react-icons/gi'
import {RiShareForwardLine} from 'react-icons/ri'
const Home = () => {
    
const [img,setImg] =useState([])

useEffect(()=>{
    fetch('img.json').then(res=> res.json())
    .then(data => {
        console.log(data);
        setImg(data)
    })

},[])

    return (
        <div className='container mx-auto mt-10 '>
          <div>
          <h1 className='text-4xl'> 
            Summer Art Camp! 5 Days of Artists and Painting Monet, Van Gogh, Matisse, & More
            </h1>
            <h1 className='text-4xl'> 
                Multi-Day Course <span>?</span>
            </h1>
          </div>
          {/* body part  */}

          <div className=' my-8 mx-5 text-start display grid grid-cols-1 lg:grid-cols-2'>
            <div className="body-content">
                <h1>
                    In this 5 day class we wil explore artists Monet, Matisse, Van Gogh,among others and then recreate paintings using crayon and watercolor. Students will have fun learning about the artists & creating their own art inspired by their work.
                </h1>
                <div className="user">
                    <img src="" alt="" />
                    <h1 className='flex my-3'>
                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr6y7AoOVYRy--wF5AqlX-ThWZQc5tVJw0KA&usqp=CAU" width={30} className="mx-3 rounded-full" alt="" /> <h1>Kimberly R Moseler</h1>
                    </h1>
            
                </div>
                <div className="total-reviews my-1">
                    ⭐⭐⭐⭐⭐ <span>467 total reviews for this teacher</span>
                </div>
                <div className="reviews">
                    ⭐⭐⭐⭐⭐ <span>5 reviews for this class</span>
                </div>
                <h1 className='my-1'>
                    Completed by 21 Learners 
                </h1>
              <div className='flex'>
              <button className=' my-2 btn btn-primary rounded-full px-9'>
                    See Class Schedule <AiOutlineRight/>
                </button>
                <h1 className='flex'> <GiSelfLove/> <span  className=' px-2'>Save</span></h1>
                <h1 className='flex px-2'> <RiShareForwardLine/>  <span className=' px-2'>Share</span></h1>
              </div>
            </div>

          {
            img.map(imgs =>
                <div className="body-img">
               <img src= {imgs.img} alt="" />
                </div>
                )
          }
          </div>
        </div>
    );
};

export default Home;