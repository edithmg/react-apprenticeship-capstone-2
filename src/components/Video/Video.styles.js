import styled from 'styled-components';

export const VideoPlayer = styled.iframe`
  height: 500px;
  width: 640px;
`;

export const VideoDescription = styled.p`
  color: white;
  font-size: 20px;
  width: 80%;
  margin-left: 120px;
  background-color: black;
  opacity: 0.6;
  @media only screen and (max-width: 600px) {
    width: 90%;
    margin: 0;
    padding-left: 10px;
    text-align: left;
  }
  @media only screen and (max-width: 700px) {
    width: 90%;
    margin: 0;
    padding-left: 15px;
    text-align: left;
  }
  @media only screen and (max-width: 812px) {
    width: 90%;
    margin: 0;
    padding-left: 15px;
    text-align: left;
  }
`;