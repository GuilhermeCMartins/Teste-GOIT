import Link from 'next/link';
import styles from './Styles.module.css'
import Image from 'next/image';

function SectionOne(){
    return <>
        <div className={styles.container}>                
            <div className={styles.containertext}>
                <h1>Colecionáveis</h1>
                <h2>Exclusivos</h2>
                <p>CHRONUS Sports é a sua chance de possuir, vender e negociar NFTs colecionáveis digitais oficiais dos melhores atletas profissionais do Mundo todo.</p>
                <div className={styles.containerbuttons}>
                    <Link className={styles.styledbuttons} href="#">Explore</Link>
                    <Link className={styles.styledbuttons} href="#">Cadastre-se</Link>
                </div>
            </div>            
            
            <div className={styles.containerimage}>
                <Image src="/images/BannerPrincipal.png" width={650} height={550} alt='Banner1' className={styles.styledImage}></Image>
            </div>

        </div>
    </>
}


export default SectionOne;