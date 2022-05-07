import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Products from "../Products/Products";

const Inventory = () => {
  return (
    <div>
      <div className="row ">
        <div className="col-sm-12 col-md-8">
          <Products></Products>
        </div>

        <div className="col-sm-12 col-md-4 my-5">
          <Link to={"/addproduct"}>
            <Button variant="outline-primary w-50" size="lg">
              {" "}
              Update Product{" "}
            </Button><br/><br/>
          </Link>
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
