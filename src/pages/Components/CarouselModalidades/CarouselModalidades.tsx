import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image'
import styles from './CarouselModalidades.module.css'
import { useRef } from 'react';

type MyCarouselProps = {
  items: {
    src: string;
    alt: string;
    key: string;
    caption: string;
    width: number;
    height: number;
  }[];
};

const CarouselModalidades = ({ items }: MyCarouselProps) => {
  const carouselRef = useRef<Carousel>(null);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 2 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
      slidesToSlide: 2 // optional, default to 1.
    }
  }

  const customTransition = {
    transform: "translateY(100px)",
    transition: "transform 0.3 ease-in-out"
  };

  return (
    <Carousel responsive={responsive} className={styles.carousel} ref={carouselRef}>
      {items.map((item) => (
        <div key={item.key} className={styles.itemdiv}>
          <Image src={item.src} alt={item.alt} width={item.width} height={item.height} />
          <p>{item.caption}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselModalidades;