import styles from './Style.module.css'
import Image from 'next/image'

function SectionFour(){
    return <>
        <div className={styles.container}>
            <div>
                <h1>Recursos</h1>
                <div className={styles.containercards}>
                    <Image width={99} height={122} src="/images/Vector.png" alt='Vector'></Image>
                    <div className={styles.containertext}>
                        <h2>NFT’s dinâmicos</h2>
                        <p>Colecionáveis exclusivos e cheios de recursos e informações. Colecione a história dos seus atleta favoritos. </p>
                    </div>
                </div>
                <div className={styles.containercards}>
                    <Image width={98} height={94} src="/images/Vector2.png" alt='Vector'></Image>
                    <div className={styles.containertext}>
                        <h2>SCOUT COMBINE</h2>
                        <p>NFT’s cheios de recursos para você colecionar, investir e se destacar dentro do mercado. </p>
                    </div>
                </div>
                <div className={styles.containercards}>
                    <Image width={100} height={82} src="/images/Vector3.png" alt='Vector'></Image>
                    <div className={styles.containertext}>
                        <h2>Carteira Digital</h2>
                        <p>Crie sua Wallet de forma simples e rápida, sem vínculos com CRIPTOMOEDAS e comece a investir nos melhores NFTs esportivos do Mundo.</p>
                    </div>
                </div>
            </div>
            <Image className={styles.styledimage} width={700} height={500} src="/images/imagem_recursos.png" alt='imagem_recursos'></Image>
        </div>
    </>
}

export default SectionFour;