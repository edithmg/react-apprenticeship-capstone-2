import styled from 'styled-components';

export const Photo = styled.img`
  max-width: 50vw;
  height: auto;
  margin-top: 30px;
  margin-bottom: 40px;
`;

export const Description = styled.div`
  color: white;
  font-size: 2rem;
  max-width: 70vw;
  text-align: center;
  background-color: darkslategray;
  opacity: 0.7;
  p {
    padding: 2rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
  @media only screen and (max-width: 700px) {
    font-size: 0.9rem;
  }
  @media only screen and (max-width: 812px) {
    font-size: 1.1rem;
  }
`;
