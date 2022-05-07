import React from "react";
import { Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = (props) => {
  const { name, picture, price, description, quantity, supplier } =
    props.product;

  return (
    <Card className="my-2">
      <Card.Img className="imageHeight" variant="top" src={picture} />
      <Card.Body>
        <Card.Title> {name} </Card.Title>
        <Card.Title className="text-primary"> Price ${price} </Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text> Supplier Name : {supplier}</Card.Text>
        Stock :{" "}
        <Badge bg="primary" pill>
          {quantity}
        </Badge>
        <div className="d-flex mt-3">
          <Link to="/addproduct">
            <Button className="me-2" variant="outline-primary">
             
              Update
            </Button>
          </Link>
          <br />
          <Link to={"/addproduct"}>
            <Button variant="outline-primary"> Manage </Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Product;
