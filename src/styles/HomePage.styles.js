// src/components/HomePage.styles.js
import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #00b9a3;
  color: white;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #ffffff;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

export const StyledButton = styled.button`
  background-color: #9c4352;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #a11844;
  }

  &:active {
    transform: scale(0.98);
  }
`;
