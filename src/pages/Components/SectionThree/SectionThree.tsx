import CarouselCard from "../CarouselCard/CarouselCard";
import { Container ,CarouselWrapper } from "./sectionthree_styles"

function SectionThree(){
    const items = [
        {
          key: '1',
          src: '/images/teste1.png',
          alt: 'Carousel Item 1',
          caption: 'Carousel Item 1',
          width: 600,
          height:800,
        },
        {
          key: '2',
          src: '/images/teste1.png',
          alt: 'Carousel Item 2',
          caption: 'Carousel Item 2',
          width: 600,
          height:800,
        },
        {
          key: '4',
          src: '/images/teste1.png',
          alt: 'Carousel Item 3',
          caption: 'Carousel Item 3',
          width: 600,
          height:800,
        },
        {
          key: '5',
          src: '/images/teste1.png',
          alt: 'Carousel Item 3',
          caption: 'Carousel Item 3',
          width: 600,
          height:800,
        },
        {
          key: '6',
          src: '/images/teste1.png',
          alt: 'Carousel Item 3',
          caption: 'Carousel Item 3',
          width: 600,
          height:800,
        },
        {
          key: '7',
          src: '/images/teste1.png',
          alt: 'Carousel Item 3',
          caption: 'Carousel Item 3',
          width: 600,
          height:800,
        },
        {
          key: '8',
          src: '/images/teste1.png',
          alt: 'Carousel Item 3',
          caption: 'Carousel Item 3',
          width: 600,
          height:800,
        },
        {
          key: '9',
          src: '/images/teste1.png',
          alt: 'Carousel Item 3',
          caption: 'Carousel Item 3',
          width: 600,
          height:800,
        },
        {
          key: '10',
          src: '/images/teste1.png',
          alt: 'Carousel Item 3',
          caption: 'Carousel Item 3',
          width: 600,
          height:800,
        },
        {
          key: '11',
          src: '/images/teste1.png',
          alt: 'Carousel Item 3',
          caption: 'Carousel Item 3',
          width: 600,
          height:800,
        },

    ];

    return <>
    <Container>
      <h1>Lançamentos</h1>
      <CarouselWrapper>
        <CarouselCard items={items} />  
      </CarouselWrapper>  
    </Container>
    </>
}

export default SectionThree;