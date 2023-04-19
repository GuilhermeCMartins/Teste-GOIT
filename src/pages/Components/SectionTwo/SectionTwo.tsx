import Image from 'next/image'
import { Container, ContainerText, DivTitulo, StyledButtons } from './sectiontwo_styles';

function SectionTwo(){
    return <>
        <Container>
            <Image src="/images/ScoutBanner.png" width={650} height={550} alt='Banner2'></Image>
            <ContainerText>
                <DivTitulo>
                    <h2 className='title'>Scout</h2>
                    <h2>Combine</h2>
                </DivTitulo>
                <p>Acompanhe o desempenho do seu atleta favorito, com NFTs dinâmicos e adicione à sua Wallet os ativos digitais de cada temporada. Invista e colecione a história. Comece agora, é rápido e fácil.</p>
                <StyledButtons href="#">Cadastre-se</StyledButtons>
            </ContainerText>
        </Container>
    </>
}

export default SectionTwo;