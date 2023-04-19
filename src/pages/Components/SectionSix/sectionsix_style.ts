import styled from 'styled-components';

export const CarouselWrapper = styled.div`
   width: 80%;
   margin: 0 auto;
`;


export const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;
   gap: 100px;

   height: 700px;

   margin-bottom: 150px;

   background-image: url("/images/Modalidades/elipse.png");
   background-position: center;
   background-repeat: no-repeat;
   background-size: contain;

   h1{
      font-size: 58px;
      font-weight:900;
      text-transform: uppercase;
   }
`
