import Image from 'next/image'
import Contador from '../Contador/Contador';
import styles from './Styles.module.css'
import Counter from '../Contador/Contador';

function ProductInfo(){
    return <>
        <section className={styles.section}>
            <div>
                <Image src="/images/Cards/Cardsfull.svg" width={360} height={500} alt='NandoBox'></Image>
            </div>
            <div className={styles.containertext}>
                <div className={styles.icons}>
                    <h3>CHRONUS Sports</h3>
                    <Image src="/images/Icones/VerifiedCheck.svg" width={24} height={24}  alt='Base'></Image>
                </div>
                <div className={styles.title}>
                    <div>
                        <h1 className={styles.name}>Nando Grana</h1>
                        <p>Volume: 250</p>
                    </div>
                    <h1 className={styles.price}>R$ 365,66</h1>
                </div>
                <p>Neque aut veniam consectetur magnam libero, natus eius numquam reprehenderit hic at, excepturi repudiandae magni optio odio doloribus? Facilisi lobortisal morbi fringilla urna amet sed ipsum.</p>
                <div className={styles.containerowners}>
                    <div className={styles.owners}>
                        <h4>Criador</h4>
                        <div className={styles.icons}>
                            <Image src="/images/Icones/VerifiedCheck.svg" width={24} height={24}  alt='Base'></Image>
                            <h3>CHRONUS Sports</h3>
                        </div>
                    </div>
                    
                    <div className={styles.owners} >
                        <h4>Detentor</h4>
                        <div className={styles.icons}>
                            <Image src="/images/Icones/VerifiedCheck.svg" width={24} height={24}  alt='Base'></Image>
                            <h3>CHRONUS Sports</h3>
                        </div>
                    </div>

                    <div className={styles.owners}>
                        <h4>Carbon Free</h4>
                        <div className={styles.icons}>
                            <Image src="/images/Icones/VerifiedCheck.svg" width={24} height={24}  alt='Base'></Image>
                            <h3>@pro_naatura</h3>
                        </div>
                    </div>
                </div>
                
                <div className={styles.quantidade}>
                    <p>Quantidade</p>
                </div>
               
                <button>Comprar</button>
                <Image src="/images/Parceiros/chart.svg" width={486} height={224} alt='Chart'></Image>
            </div>
        </section>
    
    </>
}

export default ProductInfo;