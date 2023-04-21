import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image'
import styles from './CarouselParceiros.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight,faChevronLeft  } from "@fortawesome/free-solid-svg-icons";


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


const CarouselParceiros = ({ items }: MyCarouselProps) => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  }


  return (
    <Carousel responsive={responsive} className={styles.carousel} arrows={true} > 
      {items?.map((item) => (
        <div key={item.key} className={styles.itemdiv}>
            <Image src={item.src} alt={item.alt} width={item.width} height={item.height} />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselParceiros;