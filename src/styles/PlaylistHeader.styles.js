import styled from 'styled-components';

export const PlaylistHeaderContainer = styled.div`
  background-color: #768e81;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
`;

export const PlaylistHeaderTitle = styled.h1`
  color: #a11844;
  font-size: 28px;
  margin-bottom: 10px;
`;

export const PlaylistName = styled.h2`
  color: #00b9a3;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const UpdateNameSection = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: #59a492;
  border-radius: 8px;
`;

export const UpdateInput = styled.input`
  padding: 8px;
  margin-right: 10px;
  border-radius: 5px;
  border: none;
  width: 70%;
  font-size: 16px;
`;

export const UpdateButton = styled.button`
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
