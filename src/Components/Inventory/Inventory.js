import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Products from "../Products/Products";
import Update from "../Update/Update";

const Inventory = () => {
  return (
    <div>
      <div className="row ">
        <div className="col-sm-12 col-md-8">
          <Products></Products>
        </div>

        <div className="col-sm-12 col-md-4">
          <Update></Update>
          <Link to={"/addproduct"}>
            <Button variant="outline-primary w-50" size="lg">
              {" "}
              Add New Product{" "}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
