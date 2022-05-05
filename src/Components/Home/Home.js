import React from "react";
import Banner from "../Banner/Banner";
import CustomerReviews from "../CustomerReviews/CustomerReviews";
import Inventory from "../Inventory/Inventory";
import TermsAndCondition from "../TermsAndCondition/TermsAndCondition";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <section>
        <Inventory></Inventory>
      </section>

      <section className="row cols-12 cols-md-2 cols-lg-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,32L48,48C96,64,192,96,288,122.7C384,149,480,171,576,165.3C672,160,768,128,864,128C960,128,1056,160,1152,144C1248,128,1344,64,1392,32L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <h2 className="my-5 my-5 text-primary"> Public action </h2>

        <CustomerReviews></CustomerReviews>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,32L48,48C96,64,192,96,288,122.7C384,149,480,171,576,165.3C672,160,768,128,864,128C960,128,1056,160,1152,144C1248,128,1344,64,1392,32L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>
      <section>
        <div className="row row-cols-1">
          <TermsAndCondition></TermsAndCondition>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0099ff"
              fill-opacity="1"
              d="M0,64L48,101.3C96,139,192,213,288,208C384,203,480,117,576,117.3C672,117,768,203,864,234.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Home;
