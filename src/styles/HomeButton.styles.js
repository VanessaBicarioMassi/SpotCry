import styled from 'styled-components';

export const HomeButton = styled.button`
  padding: 10px 20px;
  background-color: #a31844;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: fixed;
  top: 20px;
  left: 20px;  
  z-index: 9999;
  
  &:hover {
    background-color: #945f62;
  }
`;