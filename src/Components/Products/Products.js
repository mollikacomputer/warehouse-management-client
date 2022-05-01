import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/products")
        .then((response) => response.json())
        .then((data) => setProducts(data));
    });
    return (
        <div className="container">
        <h2 className='text-primary my-5' > Total Product Items : {products.length} </h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3" >
            {
                products.map( product => <Product
                key = {product.id}
                product = {product}
                ></Product>)
            }
        </div>
        
        </div>
    );
};

export default Products;