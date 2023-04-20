import Image from 'next/image'
import styles from './Styles.module.css'
import Link from 'next/link'

function SectionTwo(){
    return <>
        <div className={styles.container}>
            <Image src="/images/ScoutBanner.png" width={650} height={550} alt='Banner2'></Image>
            <div className={styles.containertext}>
                <div className={styles.divtitulo}>
                    <h2 className='title'>Scout</h2>
                    <h2>Combine</h2>
                </div>
                <p>Acompanhe o desempenho do seu atleta favorito, com NFTs dinâmicos e adicione à sua Wallet os ativos digitais de cada temporada. Invista e colecione a história. Comece agora, é rápido e fácil.</p>
                <Link href="#" className={styles.button}>Cadastre-se</Link>
            </div>
        </div>
    </>
}

export default SectionTwo;