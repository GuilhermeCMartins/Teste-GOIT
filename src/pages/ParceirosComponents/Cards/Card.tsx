import React from 'react';
import Image from 'next/image'
import styles from './Styles.module.css'

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

const Card: React.FC<CardProps> = ({ image, title, description, modality, quantity, max_quantity, price, trending, width, height }) => {
  return (
    <div className={styles.card}>
      <div>
        <div className={styles.image} >
          <Image src={image} alt={title} width={width} height={height}/>
        </div>
      
        <h2>{title}</h2>
        <h3>{description}</h3>
        <div className={styles.trending}>
         <h4>{modality}</h4>
          <p>{trending} %</p>
        </div>
        <div className={styles.values}>
          <div className={styles.quantity}>
             <p>Qtd:</p><p>{quantity}/</p><p>{max_quantity}</p>
          </div>
          <h4>
            R$ {price}
           </h4>
        </div>
        <div className={styles.containerbuttons}>
          <button>Comprar</button>
          <button>Colocar</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
