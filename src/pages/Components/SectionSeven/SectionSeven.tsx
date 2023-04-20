import Swiper from 'swiper';
import 'swiper/css';
import Carousel from '../CarouselMidia/CarouselMidia';
import style from './Style.module.css'

function SectionSeven(){
    const items = [
        {
            key: '2',
            src: '/images/teste1.png',
            alt: 'Carousel Item 2',
            width: 600,
            height:800,
          },
          {
            key: '2',
            src: '/images/teste1.png',
            alt: 'Carousel Item 2',
            width: 600,
            height:800,
          },
          {
            key: '2',
            src: '/images/teste1.png',
            alt: 'Carousel Item 2',
            width: 600,
            height:800,
          },
    ]
    return <>
    <div className={style.container}>
        <h1>Na mídia</h1>
        <Carousel></Carousel>
    </div>
    </>
}

export default SectionSeven;