import {StyledImage, Container, ContainerImage, ContainerText, ContainerButtons, StyledButtons} from './sectionone_styles'

function SectionOne(){
    return <>
        <Container>                
            <ContainerText>
                <h1>Colecionáveis</h1>
                <h2>Exclusivos</h2>
                <p>CHRONUS Sports é a sua chance de possuir, vender e negociar NFTs colecionáveis digitais oficiais dos melhores atletas profissionais do Mundo todo.</p>
                <ContainerButtons>
                    <StyledButtons href="#">Explore</StyledButtons>
                    <StyledButtons href="#">Cadastre-se</StyledButtons>
                </ContainerButtons>
            </ContainerText>
            
            
            
            <ContainerImage>
                <StyledImage src="/images/BannerPrincipal.png" width={650} height={550} alt='Banner1'></StyledImage>
            </ContainerImage>

        </Container>
    </>
}


export default SectionOne;