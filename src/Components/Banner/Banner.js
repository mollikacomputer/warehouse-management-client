import React from "react";
import { Carousel } from "react-bootstrap";
import bannerImg1 from '../../images/banner1.jpg';
import bannerImg2 from '../../images/banner2.jpg';
import bannerImg3 from '../../images/banner3.jpg';
import './Banner.css';

const Banner = () => {
    
  return (
    <div>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bannerImg3}
            alt="First slide"
          />
          <Carousel.Caption className="caption-bg">
            <h5>Vagitable park</h5>
            <p> Vagitable park is great and pure vagitable  </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bannerImg1}
            alt="Second slide"
          />
          <Carousel.Caption className="caption-bg">
            <h5> All kinds of Sessional Frouts</h5>
            <p>Pure all kinds of sessional fruits you can buy from us</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bannerImg2}
            alt="Third slide"
          />
          <Carousel.Caption className="caption-bg">
            <h5 > All kinds of Baby food </h5>
            <p>
              100% halal baby food. Jurm and fat free food for baby.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
