import React, { useEffect, useState } from "react";
import { Button, Form} from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './AddProduct.css'

const AddProduct = () => {
  const [products, setProducts] = useState([]);
  // load data from server to use UI
  useEffect(() => {
    fetch('http://localhost:5000/products')
    .then(res => res.json())
    .then(data => setProducts(data));
  },[]);
  const handleProductDelete = id =>{
    const proseed = window.confirm('Are you sure want to delete?');
    if(proseed){
      console.log('deleting products with id', id);
      const url = `http://localhost:5000/product/${id}`;
      fetch(url, {
        method:'DELETE'
      })
      .then(res => res.json())
      .then(data =>{
        if(data.deletedCount >0){
          console.log('deleted');
          const remaining = products.filter( product => product._id !== id);
          setProducts(remaining);
        }
      })
    }
  }
  const handleAddProduct = event =>{
    event.preventDefault();
    const name = event.target.name.value;
    const price = event.target.price.value;
    const description = event.target.description.value;
    const quantity = event.target.quantity.value;
    const supplier = event.target.supplier.value;
    const picture = event.target.picture.value;
    const product = {name, price, description, quantity, supplier, picture};
  
    // console.log(product);
    fetch('http://localhost:5000/product', {
      method: 'POST', // or 'PUT'
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
    .then(res => res.json())
    .then(data => {
      const newProducts = [...products, data];
      setProducts(newProducts);
      // console.log('success', data);
      toast('Successfully adding new data to server', data);
      event.target.reset();
      
    })
  } 

  return (
    <div className="row">
            <div className="col-sm-12 col-md-8 manage-product">
        
        {
              products.map( product => <li key={product.id}  >
                {product.name} 
                Price : ${product.price}
                Quantity : {product.quantity} pcs

                <img className="feature-img" src={product.picture} alt="picture" />

              <Button onClick={() => handleProductDelete(product._id)} variant="light" >X</Button>
              <Link to={`/update/${product._id}`} > <button className="btn btn-light" >Update</button> </Link>
                </li> )
            }
        </div>
      <div className="col-sm-12 col-md-4 mx-auto">
        <div className=" my-5">
          <h2 className="text-primary my-5"> Add Product </h2>
          <Form onSubmit={handleAddProduct} >
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                name="name"
                type="text"
                placeholder="Product Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicQuantity">
              <Form.Control
                name="quantity"
                type="number"
                placeholder="Product Quantity"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Control
                name="description"
                type="text"
                placeholder="Short Description"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Control
                name="price"
                type="number"
                placeholder="Product Price"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicSupplier">
              <Form.Control
                name="supplier"
                type="text"
                placeholder="Supplier name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPicture">
              <Form.Control
                name="picture"
                type="text"
                placeholder="Picture Url"
              />
            </Form.Group>
            <button type="submit" className="btn btn-primary w-100">Add Product Now</button>
            <ToastContainer></ToastContainer>
          </Form>
        </div>
      </div>

    </div>
  );
};

export default AddProduct;
