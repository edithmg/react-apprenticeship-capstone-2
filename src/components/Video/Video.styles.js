import styled from 'styled-components';

export const VideoPlayer = styled.iframe`
  height: 500px;
  width: 640px;
`;

export const VideoDescription = styled.div`
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
