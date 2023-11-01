import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css'

export function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="carousel-image d-block w-100 "
          src="img/car1.png"
          alt="Slide 1"
        />
        <Carousel.Caption>
          <h3>Legend 1</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image d-block w-100"
          src="img/car2.jpg"
          alt="Slide 2"
        />
        <Carousel.Caption>
          <h3>Legend 2</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image d-block w-100"
          src="img/salt.jpg"
          alt="Slide 3"
        />
        <Carousel.Caption>
          <h3>Legend 3</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}