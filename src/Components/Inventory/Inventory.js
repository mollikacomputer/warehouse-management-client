import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomerReviews from "../CustomerReviews/CustomerReviews";
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
      <section className="row cols-12 cols-md-2 cols-lg-3" >
        <h2 className="my-5" > Public action </h2> 
        <CustomerReviews></CustomerReviews>
      </section>
    </div>
  );
};

export default Inventory;
