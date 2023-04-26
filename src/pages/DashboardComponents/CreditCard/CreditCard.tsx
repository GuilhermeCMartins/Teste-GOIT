import styles from './styles.module.css'
import Image from 'next/image'

function CreditCard(){
    return <>
    <div className={styles.container}>
        <div className={styles.ccard}>
            <Image src='/images/Dashboard/visacard.svg' width={300} height={160} alt='visacard'></Image>
            <button>Adicionar Cartão</button>
            <button>Alterar forma de pagamento</button>
        </div>
    </div>
    </>
}

export default CreditCard;