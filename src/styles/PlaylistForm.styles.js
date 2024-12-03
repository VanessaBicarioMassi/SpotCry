import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #768e81;
  border-radius: 8px;
  width: 300px;
  margin: 20px auto;
`;

export const FormTitle = styled.h2`
  color: #a11844;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  border: 2px solid #945f62;
  border-radius: 5px;
  font-size: 16px;
  &:focus {
    border-color: #9c4352;
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #00b9a3;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #59a492;
  }
  &:disabled {
    background-color: #768e81;
    cursor: not-allowed;
  }
`;
