import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Products from "../Products/Products";
import Update from "../Update/Update";

const Inventory = () => {

  return (
    <div>
      <Products></Products>
      <Update></Update>
      <Link to={'/addproduct'} >
      <Button variant="outline-primary w-50" size="lg"> Add New Product </Button>
      </Link>
      
    </div>
  );
};

export default Inventory;