import React, { useEffect, useState } from 'react';


const Blogs = () => {
    const [blogs, setBlogs] = useState({});
    useEffect(()=>{
        fetch('blogsData.json')
        .then(data => data.json())
        .then(data => setBlogs(data))
    },[])
    // console.log(blogs);
    return (
        <div className='container' >
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 my-5' >
               <div>
                   <h2> Difference between javascript and nodejs </h2>
                   <p> answer 1</p>
               </div>
               <div>
                   <h2>When should you use nodejs and when should you use mongodb</h2>
                   <p>answer 2</p>
               </div>
               <div>
                   <h2>Differences between sql and nosql databases</h2>
                   <p>answer 3</p>
               </div>
            </div>
        </div>
    );
};

export default Blogs;