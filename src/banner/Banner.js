import React, { useState } from "react";
import Image1 from "../images/banner1.png";
import Image2 from "../images/banner1.png";
import Image3 from "../images/banner1.png";
import { Carousel } from "react-bootstrap";

function Banner() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={Image1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Image2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Image3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
