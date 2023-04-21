import CarouselModalidades from "../CarouselModalidades/CarouselModalidades";
import styles from './Style.module.css'

function SectionSix(){
    const items = [
        {
          key: '1',
          src: '/images/Modalidades/basquete.svg',
          alt: 'Carousel Item 1',
          caption: 'Basquete',
          width: 104,
          height: 113,
        },
        {
            key: '2',
            src: '/images/Modalidades/futsal.svg',
            alt: 'Carousel Item 1',
            caption: 'Futsal',
            width: 104,
            height: 113,
          },
          {
            key: '3',
            src: '/images/Modalidades/Ginastica.svg',
            alt: 'Carousel Item 1',
            caption: 'Ginástica',
            width: 104,
            height: 113,
          },
          {
            key: '4',
            src: '/images/Modalidades/handball.svg',
            alt: 'Carousel Item 1',
            caption: 'Handball',
            width: 104,
            height: 113,
          },
          {
            key: '5',
            src: '/images/Modalidades/judo.svg',
            alt: 'Carousel Item 1',
            caption: 'Judô',
            width: 104,
            height: 113,
          },
          {
            key: '6',
            src: '/images/Modalidades/nado_sincronizado.svg',
            alt: 'Carousel Item 1',
            caption: 'Nado Sincronizado',
            width: 104,
            height: 113,
          },
          {
            key: '7',
            src: '/images/Modalidades/Natação.svg',
            alt: 'Carousel Item 1',
            caption: 'Natação',
            width: 104,
            height: 113,
          },
          {
            key: '8',
            src: '/images/Modalidades/polo_aquatico.svg',
            alt: 'Carousel Item 1',
            caption: 'Polo Aquático',
            width: 104,
            height: 113,
          },
          {
            key: '9',
            src: '/images/Modalidades/SaltoOrnamental.svg',
            alt: 'Carousel Item 1',
            caption: 'Salto Ornamental',
            width: 104,
            height: 113,
          },
          {
            key: '10',
            src: '/images/Modalidades/tenis_mesa.svg',
            alt: 'Carousel Item 1',
            caption: 'Tênis de Mesa',
            width: 104,
            height: 113,
          },
          {
            key: '11',
            src: '/images/Modalidades/tenis.svg',
            alt: 'Carousel Item 1',
            caption: 'Tênis',
            width: 104,
            height: 113,
          },
          {
            key: '12',
            src: '/images/Modalidades/volei.svg',
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