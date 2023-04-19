import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column ;
    justify-content: center;
    align-items: center;
    gap: 40px;
    height: 486px;

    h1{
        font-size: 58px;
        font-weight: 900;
        line-height: 58px;
        text-transform: uppercase;
        margin-bottom: 20px;
    }

    p{
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        text-align: center;
    }
`