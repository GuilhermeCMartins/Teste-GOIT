import Image from 'next/image'
import Link from 'next/link'
import styles from './Style.module.css'

function SectionFive(){
   return <> 
    <div className={styles.container}>
        <div className={styles.containertext}>
            <h2>Já imaginou <div className={styles.containerblue}>ganhar
            viagens</div> e diversos
            outros prêmios?</h2>
            <p>Uma enorme variedade de experiências atreladas aos NFTs esportivos mais procurados. Compre colecionáveis raros e participe.</p>
            <div className={styles.containerbuttons}>
                <Link className={styles.styledbuttons} href="">Explore</Link>
                <Link className={styles.styledbuttons} href="">Cadastre-se</Link>
            </div>
        </div>
        <div>
            <Image src="/images/BannerPack.png" width={400} height={300} alt='Banner'></Image>
        </div>
    </div>
    
    </>
}

export default SectionFive;