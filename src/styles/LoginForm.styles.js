// src/components/LoginForm.styles.js
import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #00b9a3; /* Fundo da tela */
`;

export const StyledForm = styled.form`
  background-color: #59a492;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 400px;
`;

export const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #768e81;
  border-radius: 5px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #a11844;
    box-shadow: 0 0 5px rgba(161, 24, 68, 0.5);
  }
`;

export const StyledButton = styled.button`
  background-color: #9c4352;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #a11844;
  }
`;

export const StyledTitle = styled.h2`
  color: white;
  text-align: center;
`;
