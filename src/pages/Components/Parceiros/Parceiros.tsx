import CarouselParceiros from "../CarouselParceiros/CarouselParceiros"
import { CarouselWrapper, Container } from "./style";


function Parceiros(){
    const items = [
        {
            key: '1',
            src: '/images/Parceiros/fpf.png',
            alt: 'Carousel Item 1',
            caption: 'Basquete',
            width: 120,
            height: 120,
          },
          {
            key: '2',
            src: '/images/Parceiros/sbf.png',
            alt: 'Carousel Item 1',
            caption: 'Basquete',
            width: 73,
            height: 119,
          },
          {
            key: '3',
            src: '/images/Parceiros/websummit.png',
            alt: 'Carousel Item 1',
            caption: 'Basquete',
            width: 114,
            height: 57,
          },          
    ]
    return <>
        <Container>
            <h1>Parceiros</h1>
            <p>Parceiros e Clientes da CHRONUS Plataform</p>
            <CarouselWrapper>
                <CarouselParceiros items={items}></CarouselParceiros>
            </CarouselWrapper>
        </Container>
    </>
}

export default Parceiros;