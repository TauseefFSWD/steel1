import React from 'react'
import homeCarousel from "../assets/carouselimg.jpg";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";

const carousel = () => {
  return (
        <div>
        <Carousel className="w-full max-w-4xl mx-auto my-14 px-4 md:px-8">
          <CarouselContent>
            <CarouselItem>
              <img src={homeCarousel} alt="Carousel Slide 1" className="w-full h-auto object-cover" />
            </CarouselItem>
            <CarouselItem>
              <img src={homeCarousel} alt="Carousel Slide 2" className="w-full h-auto object-cover" />
            </CarouselItem>
            <CarouselItem>
              <img src={homeCarousel} alt="Carousel Slide 3" className="w-full h-auto object-cover" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 md:left-10 top-1/2 transform -translate-y-1/2" />
          <CarouselNext className="absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2" />
        </Carousel>
    </div>
  )
}

export default carousel