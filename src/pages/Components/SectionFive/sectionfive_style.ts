import styled from "styled-components";
import Link from 'next/link'

export const Container = styled.div`
    display: flex;
    width: 80%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
`

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;  

    h2{
        font-size: 40px;
        line-height: 100%;
        font-weight: 900;
        text-transform: uppercase;
        text-align: justify;
    }

    p{
        width: 570px;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
    }
`

export const ContainerBlue = styled.div`
    color: #00E4FF;
`

export const StyledButtons = styled(Link)`
    background-color: #0D0035;
    color: #EEEEEE;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 300;
    border: 1px solid #803EB4;
    border-radius: 16px;
    padding: 13px 30px 13px 30px;
    width: fit-content;

    :hover{
        background: linear-gradient(322.68deg, #803EB4 36.47%, #4F25CC 92.31%);
        font-weight: 700;
        font-size:16px;
    }
`

export const ContainerButtons = styled.div`
    display: flex;
    gap: 20px;
`