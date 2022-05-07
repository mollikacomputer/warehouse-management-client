import React from "react";
import { Button, Card } from "react-bootstrap";
import profilePicOne from "../../images/profile_pic/profile-pic1.jpg";
import profilePicTwo from "../../images/profile_pic/profile-pic2.jpg";
import profilePicThree from "../../images/profile_pic/profile-pic3.jpg";
import './CustomerReviews.css'

const CustomerReviews = () => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        <Card>
          <Card.Img className="rounded-circle w-50 mx-auto" variant="top roundedCircle " src={profilePicOne} />
          <Card.Body>
            <Card.Title>Anthony</Card.Title>
            <Card.Text>
              This product is very good and delevery system or support system is
              awesome. I will buy after few months.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img className="rounded-circle w-50 mx-auto" variant="top roundedCircle " src={profilePicTwo} />
          <Card.Body>
            <Card.Title>William</Card.Title>
            <Card.Text>
              Nonstop delevery system or support system is awesome. I will buy
              after few months.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img className="rounded-circle w-50 mx-auto" variant="top roundedCircle " src={profilePicThree} />
          <Card.Body>
            <Card.Title>Mary</Card.Title>
            <Card.Text>
              Finest product and service . This product is very good and
              delevery system or support system is awesome. I will buy after few
              months.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default CustomerReviews;
