import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}
html {
    box-sizing: border-box;
    font-size: 62.5%;
    @media only screen and (max-width: 1200px){
        font-size: 58%;
    }
    @media only screen and (min-width: 1980px){
        font-size: 70%;
    }
}
body { 
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    line-height: 1.5;
    font-size: 1.4rem;
    background: '#1d1f28';
    color: '#fafafa';
}
h1,h2,h3,h4,h5,h6 {
  color: white;
  transition: .25s;
  
}
`;

export default GlobalStyles;

export const Container = styled.section`
  margin: 0 auto;
  padding: 0 50px;
  max-width: 1300px;
  width: 100%;
  @media (max-width: 400px) {
    padding: 0 10px;
  }
  @media (max-width: 991px) {
    padding: 0 30px;
  }
  @media (min-width: 1500px) {
    max-width: 1500px;
  }
  @media (min-width: 1800px) {
    max-width: 1800px;
    padding: 0 30px;
  }
`;

export const Section = styled.section`
  margin-top: 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
