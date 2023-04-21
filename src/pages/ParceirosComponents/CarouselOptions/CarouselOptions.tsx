import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../Cards/Card';
import styles from './Styles.module.css'
// importe os estilos do Swiper
import 'swiper/swiper-bundle.min.css';

// importe os módulos do Swiper que você quer usar
SwiperCore.use([Navigation]);


interface CardProps {
  image: string;
  title: string;
  description: string;
  modality: string;
  quantity: number;
  max_quantity: number;
  price: number;
  trending: number;
  width: number;
  height: number;
}

interface CarouselProps {
  cards: CardProps[];
}

const CarouselOptions: React.FC<CarouselProps> = ({ cards }) => {
  const settings = {
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: true,
  };

  return (
    <div className={styles.container}>
      <Swiper {...settings}>
        {cards.map((card) => (
          <SwiperSlide key={card.title}>
            <Card {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselOptions;
