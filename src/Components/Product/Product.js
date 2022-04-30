import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = (props) => {
    const {name, picture, price} = props.product;
    // console.log(product);
  return (
    <Card className="my-2">
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Card.Title> {name} </Card.Title>
        <Card.Title className="text-primary"> Price {price} </Card.Title>
        <Card.Text>{price}</Card.Text>
        <Link to="./booknow">
          <Button variant="primary"> Check Out</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Product;
