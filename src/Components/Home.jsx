import React from 'react';

const Home = () => {
    return (
        <div>
          <div>
          <h1 className='text-4xl'> 
            Summer Art Camp! 5 Days of Artists and Painting Monet, Van Gogh, Matisse, & More
            </h1>
            <h1 className='text-4xl'> 
                Multi-Day Course <span>?</span>
            </h1>
          </div>
          {/* body part  */}

          <div>
            <div className="body-content">
                <h1>
                    In this 5 day class we wil explore artists Monet, Matisse, Van Gogh,among others and then recreate paintings using crayon and watercolor. Students will have fun learning about the artists & creating their own art inspired by their work.
                </h1>
                <div className="user">
                    <img src="" alt="" />
                    <h1>
                        Kimberly R Moseler
                    </h1>
            
                </div>
                <div className="total-reviews">
                    ⭐⭐⭐⭐⭐ <span>467 total reviews for this teacher</span>
                </div>
                <div className="reviews">
                    ⭐⭐⭐⭐⭐ <span>5 reviews for this class</span>
                </div>
                <h1>
                    Completed by 21 Learners 
                </h1>
                <button className='btn btn-ghost'>
                    See Class Schedule ℹ️🤕
                </button>
            </div>

            <div className="body-img">
                
            </div>
          </div>
        </div>
    );
};

export default Home;