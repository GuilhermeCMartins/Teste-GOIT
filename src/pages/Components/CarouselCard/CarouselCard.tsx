import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import { CarouselInternalState } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image'

type ImageProps = {
    src: string;
    alt: string;
    key: string;
    width: number;
    height: number;
};

type CarouselProps = {
  images: ImageProps[];
  beforeChange: (from: number, to: number) => void;
};

const CarouselCard: React.FC<CarouselProps> = ({ images, beforeChange }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBeforeChange = (nextSlide: number, state: CarouselInternalState) => {
    beforeChange(currentSlide, nextSlide);
    setCurrentSlide(nextSlide);
  };
  
  

  const renderImage = (image: ImageProps, index: number) => {
    const isAtCenter = index === currentSlide + 2;

    const imageClassName = `carousel-image ${isAtCenter ? "highlighted" : ""}`;

    const containerClassName = `carousel-container ${
      index === 0 || index === images.length - 1 ? "blue-background" : ""
    }`;

    return (
      <div key={index} className={containerClassName}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className={imageClassName}
          style={{
            transform: isAtCenter ? "translateY(-5%)" : "",
            transition: isAtCenter ? "transform 0.3 ease-in-out" : ""
          }}
        />
      </div>
    );
  };

  return (
    <div className="custom-carousel-container">
      <Carousel
        responsive={responsive}
        beforeChange={handleBeforeChange}
        renderButtonGroupOutside={true}
        arrows={true}
      >
        {images?.map((image, index) => renderImage(image, index))}
      </Carousel>
    </div>
  );
};


export default CarouselCard;
