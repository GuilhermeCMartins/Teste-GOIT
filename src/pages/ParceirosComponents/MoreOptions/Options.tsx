import CarouselOptions from "../CarouselOptions/CarouselOptions";
import styles from './Styles.module.css'

function Options(){
    const cards = [
        {
            image: '/images/Cards/nft_um.svg',
            title: 'Nando Grana',
            description: 'Hall of fame',
            modality: 'Futsal',
            quantity: 120,
            max_quantity: 250,
            price: 365.66,
            trending: 10,
            width: 302,
            height: 279,
        },
        {
            image: '/images/Cards/nft_um.svg',
            title: 'Nando Grana',
            description: 'Hall of fame',
            modality: 'Futsal',
            quantity: 120,
            max_quantity: 250,
            price: 365.66,
            trending: 10,
            width: 302,
            height: 279,
        },
        {
            image: '/images/Cards/nft_um.svg',
            title: 'Nando Grana',
            description: 'Hall of fame',
            modality: 'Futsal',
            quantity: 120,
            max_quantity: 250,
            price: 365.66,
            trending: 10,
            width: 302,
            height: 279,
        },
         {
            image: '/images/Cards/nft_um.svg',
            title: 'Nando Grana',
            description: 'Hall of fame',
            modality: 'Futsal',
            quantity: 120,
            max_quantity: 250,
            price: 365.66,
            trending: 10,
            width: 302,
            height: 279,
        },
        {
            image: '/images/Cards/nft_um.svg',
            title: 'Nando Grana',
            description: 'Hall of fame',
            modality: 'Futsal',
            quantity: 120,
            max_quantity: 250,
            price: 365.66,
            trending: 10,
            width: 302,
            height: 279,
        },
        {
            image: '/images/Cards/nft_um.svg',
            title: 'Nando Grana',
            description: 'Hall of fame',
            modality: 'Futsal',
            quantity: 120,
            max_quantity: 250,
            price: 365.66,
            trending: 10,
            width: 302,
            height: 279,
        },
    ]

    return <>
        <div className={styles.container}>
            <h1>Confira mais opções</h1>
            <CarouselOptions cards={cards}></CarouselOptions>
        </div>
    </>
}   

export default Options;