import styled from "styled-components";
import Link from 'next/link'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    ::before{
    content: "SCOUT";
    position: absolute;
    color: #16044A;
    font-size: 300px;
    font-weight: 900;
    z-index: -1;
    margin-bottom: 200px;
}
`

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 470px;
    padding: 12px;
    

    .title{
        margin-bottom: -20px;
    }

    h2{
        font-weight:800;
        font-size: 50px;
        text-transform: uppercase;
    }

    p{
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 50px;
    }
`

export const DivTitulo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
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
    width: fit-content;

    :hover{
        background: linear-gradient(322.68deg, #803EB4 36.47%, #4F25CC 92.31%);
        font-weight: 700;
        font-size:16px;
    }
`