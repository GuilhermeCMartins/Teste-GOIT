import {Container,StyledImage, ContainerCards, Vector, ContainerText} from './sectionfour_styles'

function SectionFour(){
    return <>
        
        <Container>
            
            <div>
                <h1>Recursos</h1>
                <ContainerCards>
                    <Vector width={99} height={122} src="/images/Vector.png" alt='Vector'></Vector>
                    <ContainerText>
                        <h2>NFT’s dinâmicos</h2>
                        <p>Colecionáveis exclusivos e cheios de recursos e informações. Colecione a história dos seus atleta favoritos. </p>
                    </ContainerText>
                </ContainerCards>
                <ContainerCards>
                    <Vector width={98} height={94} src="/images/Vector2.png" alt='Vector'></Vector>
                    <ContainerText>
                        <h2>SCOUT COMBINE</h2>
                        <p>NFT’s cheios de recursos para você colecionar, investir e se destacar dentro do mercado. </p>
                    </ContainerText>
                </ContainerCards>
                <ContainerCards>
                    <Vector width={100} height={82} src="/images/Vector3.png" alt='Vector'></Vector>
                    <ContainerText>
                        <h2>Carteira Digital</h2>
                        <p>Crie sua Wallet de forma simples e rápida, sem vínculos com CRIPTOMOEDAS e comece a investir nos melhores NFTs esportivos do Mundo.</p>
                    </ContainerText>
                </ContainerCards>
            </div>
            <StyledImage width={700} height={500} src="/images/imagem_recursos.png" alt='imagem_recursos'></StyledImage>
        </Container>
    
    </>
}

export default SectionFour;