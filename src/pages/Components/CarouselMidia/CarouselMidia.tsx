import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import "swiper/swiper-bundle.css";
import Image from 'next/image'
import style from './MySlider.module.css'

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

function MySlider() {
  return (
    <div className={style.swipercontainer}>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={4}
        coverflowEffect={{
          rotate: 100,
          stretch: 0,
          depth: 50,
          modifier: 1,
          slideShadows: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        <SwiperSlide>
            <div className={style.revista}>
                <div className={style.container}>
                <h1>Revista veja</h1>
                <p>Substituição: sai o olheiro no futebol, entra a inteligência artificial. 
                A evolução de plataformas de análise de dados vem revolucionando as partidas no Brasil e no mundo.
                </p>
                <p>
                Trata-se da Mooh!Tech, que lançou o CHRONUS Sports, uma Plataforma que trabalha com os mais variados atributos técnicos e de desempenhos dos atletas e clubes.
                </p>
                <button>Veja agora</button>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/CarouselMidia/Imagem1.png" width={400} height={500}alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/CarouselMidia/Imagem2.png"width={400} height={500} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/CarouselMidia/Imagem3.png"width={400} height={500} alt="Slide 3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MySlider;
