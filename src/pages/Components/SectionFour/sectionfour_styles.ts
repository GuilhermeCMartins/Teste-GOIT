import styled from "styled-components";
import Image from 'next/image';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    padding: 30px;
    margin-bottom: 150px;

    h1{
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-style: normal;
        line-height: 100%;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        font-weight: 900px;
        font-size: 58px;
        margin-bottom: 50px;
    }

    h2{
        color: #00E4FF;
        font-size: 45px;
        font-weight: 900;
        text-transform: uppercase;
    }
`

export const StyledImage = styled(Image)`
    margin-right: -100px;
`

export const Vector = styled(Image)`
`

export const ContainerCards = styled.div`
    display: flex;
    gap: 75px;
    align-items: center;
    margin-bottom: 30px;

    h2{
        color: #00E4FF;
        font-size: 45px;
        font-weight: 900;
        text-transform: uppercase;
    }
`

export const ContainerText = styled.div`
    width: 500px ;

    h2{
        font-size: 42px;
        font-weight: 900;
        margin-bottom: 20px;
    }
`