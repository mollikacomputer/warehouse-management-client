import React, { useEffect, useState } from "react";
import { Form} from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
  const [products, setproducts] = useState([]);
  // load data from server to use UI
  useEffect(() => {
    fetch('http://localhost:5000/products')
    .then(res => res.json())
    .then(data => setproducts(data));
  },[])
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
      console.log('success', data);
      alert('Successfully adding new data to server', data);
      toast('Successfully adding new data to server', data);
      
    })
  } 

  return (
    <div className="row">
      <div className="col-12 col-md-6 mx-auto">
        <div className=" my-5">
          <h2 className="text-primary my-5"> Add Product </h2>
          <Form onSubmit={handleAddProduct} >
            {/* 
            <Form.Group className="mb-3" controlId="formBasicId">
              <Form.Control name="id" type="text" placeholder="Product Id" />
            </Form.Group>
 */}
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
          {
            products.map( product => <li key={product.id}  > Product Name : {product.name} Price : {product.price}  </li> )
          }
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
