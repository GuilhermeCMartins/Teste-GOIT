import CarouselModalidades from "../CarouselModalidades/CarouselModalidades";
import styles from './Style.module.css'

function SectionSix(){
    const items = [
        {
          key: '1',
          src: '/images/Modalidades/basquete.png',
          alt: 'Carousel Item 1',
          caption: 'Basquete',
          width: 104,
          height: 113,
        },
        {
            key: '2',
            src: '/images/Modalidades/futebol.png',
            alt: 'Carousel Item 1',
            caption: 'Futebol',
            width: 104,
            height: 113,
          },
          {
            key: '3',
            src: '/images/Modalidades/Futsal.png',
            alt: 'Carousel Item 1',
            caption: 'Futsal',
            width: 104,
            height: 113,
          },
          {
            key: '4',
            src: '/images/Modalidades/Ginastica.png',
            alt: 'Carousel Item 1',
            caption: 'Ginastica',
            width: 104,
            height: 113,
          },
          {
            key: '5',
            src: '/images/Modalidades/Natação.png',
            alt: 'Carousel Item 1',
            caption: 'Natação',
            width: 104,
            height: 113,
          },
          {
            key: '6',
            src: '/images/Modalidades/volei.png',
            alt: 'Carousel Item 1',
            caption: 'Vôlei',
            width: 104,
            height: 113,
          },
          {
            key: '6',
            src: '/images/Modalidades/volei.png',
            alt: 'Carousel Item 1',
            caption: 'Vôlei',
            width: 104,
            height: 113,
          },
          {
            key: '6',
            src: '/images/Modalidades/volei.png',
            alt: 'Carousel Item 1',
            caption: 'Vôlei',
            width: 104,
            height: 113,
          },
    ]

    return <>
        <div className={styles.container}>
            <h1>Modalidades</h1>
            <div className={styles.carouselwrapper}>
                <CarouselModalidades items={items} />  
            </div>  
        </div>
    </>
}

export default SectionSix;