import React, {useEffect, useState} from "react";
import { Form, ToastContainer } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Update = () => {

  const {id} = useParams();
  const [product, setProduct] = useState({});
  useEffect(()=>{
    const url = `https://obscure-brook-05737.herokuapp.com/product/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setProduct(data))
  },[]);

    const handleUpdateProduct = event =>{
      event.preventDefault();
      const name = event.target.name.value;
      const quantity = event.target.quantity.value;
      // const price = event.target.price.value;
      // const description = event.target.description.value;
      // const supplier = event.target.supplier.value;
      // const picture = event.target.picture.value;
      const updatedProduct = {name, quantity};
    
      // console.log(product);
      const url = `https://obscure-brook-05737.herokuapp.com/product/${id}`;
      fetch(url, {
        method: 'PUT', // or 'POST'
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
      })
      .then(res => res.json())
      .then(data => {
        console.log('success', data);
        alert('users Update successfully!!!');
        event.target.reset();
        toast('updated success');
      })
    } 

  return (
    
    <div className="w-50 mx-auto my-4" >
      <h2 className="text-primary my-5" > Update Your Product Quantity  </h2>
      <Form onSubmit={handleUpdateProduct} >
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
            <button type="submit" className="btn btn-primary w-100">Update Product</button>
            <ToastContainer></ToastContainer>
          </Form>
    </div>
  );
};

export default Update;
