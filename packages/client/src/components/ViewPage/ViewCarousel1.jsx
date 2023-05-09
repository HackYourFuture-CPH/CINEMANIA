// using react-elastic-carousel
import React from 'react';
import Carousel from 'react-elastic-carousel';
import EachCardForCarousel1 from './EachCardForCarousel1';

export default function ViewCarousel1() {
  const breakPoints = [
    { width: 100, itemsToShow: 2 },
    { width: 400, itemsToShow: 3 },
    { width: 1200, itemsToShow: 5 },
  ];
  return (
    <div className="view-carousel">
      <Carousel breakPoints={breakPoints}>
        <EachCardForCarousel1 number="1" />
        <EachCardForCarousel1 number="2" />
        <EachCardForCarousel1 number="3" />
        <EachCardForCarousel1 number="4" />
        <EachCardForCarousel1 number="5" />
        <EachCardForCarousel1 number="6" />
        <EachCardForCarousel1 number="7" />
        <EachCardForCarousel1 number="8" />
        <EachCardForCarousel1 number="9" />
        <EachCardForCarousel1 number="10" />
      </Carousel>
    </div>
  );
}
