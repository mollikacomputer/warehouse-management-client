import React from "react";
import { Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Product.css'

const Product = (props) => {
    const {name, picture, price,description, quantity, supplier} = props.product;
    
  return (
    <Card className="my-2">
      <Card.Img className="imageHeight" variant="top" src={picture} />
      <Card.Body>
        <Card.Title> {name} </Card.Title>
        <Card.Title className="text-primary"> Price {price} </Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text> Supplier Name : {supplier}</Card.Text>
        Stock : {" "}
        <Badge bg="primary" pill>
            { quantity}
          </Badge>
        <div className="d-block" >
        <Link to="/update">
          <Button className="me-5" variant="light"> Update Product </Button>
        </Link>
        <Link to={'/manage'} >
        <Button variant="light"> Manage Product </Button>
        </Link>
        </div>
        
      </Card.Body>
      
    </Card>
  );
};

export default Product;
