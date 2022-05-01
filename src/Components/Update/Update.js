import React from "react";
import { Form } from "react-bootstrap";

const Update = () => {
  return (
    <div className="w-50 mx-auto my-4" >
      <h2 className="text-primary my-5" > Update Your Product Quantity </h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="productName" placeholder="Product Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="productQuantity" placeholder="Product Quantity" />
        </Form.Group>
        <button className="btn btn-primary w-100">
            Update Now
          </button>
      </Form>
    </div>
  );
};

export default Update;
