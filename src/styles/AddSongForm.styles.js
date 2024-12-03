import styled from 'styled-components';

export const AddSongFormContainer = styled.div`
  background-color: #768e81;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
`;

export const AddSongFormTitle = styled.h2`
  color: #a11844;
  font-size: 28px;
  margin-bottom: 15px;
`;

export const AddSongInput = styled.input`
  padding: 8px;
  margin-right: 10px;
  border-radius: 5px;
  border: none;
  width: 70%;
  font-size: 16px;
  margin-bottom: 15px;
`;

export const AddSongButton = styled.button`
  padding: 10px 20px;
  background-color: #00b9a3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #59a492;
  }

  &:disabled {
    background-color: #768e81;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;
