import CarouselCard from "../CarouselCard/CarouselCard";
import styles from './Styles.module.css'

function SectionThree(){
    const items = [
        {
          key: '1',
          src: '/images/Cards/chico.svg',
          alt: 'NFTHome chico',
          caption: 'Chico',
          width: 606,
          height: 798,
        },
        {
          key: '2',
          src: '/images/Cards/dalila.svg',
          alt: 'NFTHome Dalila',
          caption: 'Dalila',
          width: 606,
          height:798,
        },
        {
          key: '3',
          src: '/images/Cards/guido.svg',
          alt: 'NFTHome Guido',
          caption: 'Guido',
          width: 606,
          height:798,
        },
        {
          key: '4',
          src: '/images/Cards/macaba.svg',
          alt: 'NFTHome Macaba',
          caption: 'Macaba',
          width: 606,
          height:798,
        },
        {
          key: '5',
          src: '/images/Cards/marta.svg',
          alt: 'NFTHome Marta',
          caption: 'Marta',
          width: 606,
          height: 798,
        },
        {
          key: '6',
          src: '/images/Cards/moser.svg',
          alt: 'NFTHome Moser',
          caption: 'Moser',
          width: 606,
          height: 798,
        },
        {
          key: '7',
          src: '/images/Cards/rolando.svg',
          alt: 'NFTHome Rolando',
          caption: 'Rolando',
          width: 606,
          height: 798,
        },
        {
          key: '8',
          src: '/images/Cards/xando.svg',
          alt: 'NFTHome Xandó',
          caption: 'Xaando',
          width: 606,
          height: 798,
        },
    ];

    const handleBeforeChange = (from: number, to: number) => {};

    return <>
    <div className={styles.container}>
      <h1>Lançamentos</h1>
      <div className={styles.carouselwrapper}>
        <CarouselCard images={items} beforeChange={handleBeforeChange}></CarouselCard>
      </div>  
    </div>
    </>
}

export default SectionThree;