import styled from "styled-components";
import Image from 'next/image';
import Link from 'next/link'

export const StyledImage = styled(Image)`
`

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 50px;
    margin: 20px;
    padding: 30px;
    height: 100%;
    width: 80%;
    margin: 20px auto;

    h1{
        text-transform: uppercase;
        font: oblique;
        font-size: 56px;
        line-height: 56px;
        font-weight: 900;
    }
    h2{
        text-transform: uppercase;
        color: #00E4FF;
        font: oblique;
        font-size: 45px;
        line-height: 45px;
        font-weight: 900;
        margin-bottom: 20px;
    }
    p{
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
    }
`

export const ContainerImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
`

export const ContainerText = styled.div`
    margin-top: 50px;
    padding: 30px;
`

export const ContainerButtons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
    margin-top: 20px;
`

export const StyledButtons = styled(Link)`
    background-color: #0D0035;
    color: #EEEEEE;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 300;
    border: 1px solid #803EB4;
    border-radius: 16px;
    padding: 16px 30px 16px 30px;

    :hover{
        background: linear-gradient(322.68deg, #803EB4 36.47%, #4F25CC 92.31%);
        font-weight: 700;
        font-size:16px;
    }
`