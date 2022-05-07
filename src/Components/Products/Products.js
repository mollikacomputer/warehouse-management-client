import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';


const Products = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
      fetch("https://obscure-brook-05737.herokuapp.com/products")
        .then((response) => response.json())
        .then((data) => setProducts(data.slice(0, 6)));
    });
    
    return (
        <div className="container">
       <Link to='/allproducts' ><Button className='my-5' > Show All Products  </Button></Link>
        
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3" >
            {
                products.map( product => <Product
                key = {product.id}
                product = {product}
                >
                </Product>)
            }
        </div>
        
        </div>
        
    );
};

export default Products;