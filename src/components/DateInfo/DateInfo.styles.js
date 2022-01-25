import styled from 'styled-components';

export const PickerContainer = styled.div`
  margin: 1rem;
  input {
    color: white;
  }
  svg {
    background-color: white;
  }
`;

export const DateControls = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const DateBtn = styled.button`
  padding: 0.8rem;
  margin: 1rem;
  color: black;
  background: #ccc;
  font-size: 15px;
  font-family: 'Space Mono';
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;
