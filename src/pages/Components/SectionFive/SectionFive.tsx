import Image from 'next/image'
import { Container, ContainerText, ContainerBlue , StyledButtons, ContainerButtons} from './sectionfive_style'

function SectionFive(){
   return <> 
    <Container>
        <ContainerText>
            <h2>Já imaginou <ContainerBlue>ganhar
            viagens</ContainerBlue> e diversos
            outros prêmios?</h2>
            <p>Uma enorme variedade de experiências atreladas aos NFTs esportivos mais procurados. Compre colecionáveis raros e participe.</p>
            <ContainerButtons>
                <StyledButtons href="">Explore</StyledButtons>
                <StyledButtons href="">Cadastre-se</StyledButtons>
            </ContainerButtons>
        </ContainerText>
        <div>
            <Image src="/images/BannerPack.png" width={400} height={300} alt='Banner'></Image>
        </div>
    </Container>
    
    </>
}

export default SectionFive;