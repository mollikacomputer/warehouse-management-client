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
                   <p> Javascript is programming language. Its run any kinds of browser in javascript engine. Otherwise nodejs is running environment for javascript programming language. Nodejs hold many access.</p>
               </div>
               <div>
                   <h2>When should you use nodejs and when should you use mongodb</h2>
                   <p>Nodejs is a Javascript engine. When we can write application with JavaScript then its run NodeJs Most commonly its use build a server api OtherWise MongoDB is database Engine

                   Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.
                   </p>
               </div>
               <div>
                   <h2>Differences between sql and nosql databases</h2>
                   <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
               </div>
            </div>
        </div>
    );
};

export default Blogs;