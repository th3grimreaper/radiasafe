import * as React from "react";
import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function CarouselImage() {
  const images = [
    "https://via.placeholder.com/400x400?text=Image+1",
    "https://via.placeholder.com/400x400?text=Image+2",
    "https://via.placeholder.com/400x400?text=Image+3",
    "https://via.placeholder.com/400x400?text=Image+4",
    "https://via.placeholder.com/400x400?text=Image+5",
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col lg:flex-row-reverse space-y-4 px-8">
      {/* Main Carousel */}
      <div className="relative w-full flex items-start lg:items-start max-w-[100%] overflow-hidden">
        <Carousel className="w-full">
          <CarouselContent
            style={{
              transform: `translateX(-${selectedIndex * 100}%)`,
              transition: "transform 0.5s ease",
              display: "flex",
            }}
          >
            {images.map((url, index) => (
              <CarouselItem key={index} className="flex-shrink-0 w-full">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-0">
                      <img
                        src={url}
                        alt={`Slide ${index + 1}`}
                        className="object-cover w-full h-full rounded-lg"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Custom Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 transform text-2xl -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          ‹
        </button>

        {/* Custom Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 transform text-2xl -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
         › 
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex px-8 lg:flex-col md:justify-start lg:justify-center space-x-2 overflow-x-auto">
        {images.map((url, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`border-2 ${
              selectedIndex === index ? "border-primary" : "border-transparent"
            } rounded-lg p-1`}
          >
            <img
              src={url}
              alt={`Thumbnail ${index + 1}`}
              className="w-16 h-16 object-cover rounded"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default CarouselImage;