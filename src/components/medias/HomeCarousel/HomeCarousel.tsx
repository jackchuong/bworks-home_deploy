import React, { ReactElement } from 'react';
// import Carousel from 'react-material-ui-carousel';
import Slider from 'react-slick';
import MediaView from '../MediaView';

const items = [
  {
    name: 'Random Name #1',
    description: 'Probably the most random thing you have ever seen!',
  },
  {
    name: 'Random Name #2',
    description: 'Hello World!',
  },
  {
    name: 'Random Name #1',
    description: 'Probably the most random thing you have ever seen!',
  },
  {
    name: 'Random Name #2',
    description: 'Hello World!',
  },
];

export default function HomeCarousel(): ReactElement {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: false,
    beforeChange: function (currentSlide, nextSlide) {},
    afterChange: function (currentSlide) {},
  };
  return (
    <Slider {...settings}>
      {items.map((item) => (
        <MediaView key={item.name} id="C57vy2bfVrA" />
      ))}
    </Slider>
  );
}
