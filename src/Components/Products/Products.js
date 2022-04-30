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
        <div >
        <h2> all Products </h2>
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