import styled from 'styled-components';

export const PlaylistDetailsContainer = styled.div`
  background-color: #945f62;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 1000px;
  margin: 20px auto;
`;

export const BackButton = styled.button`
  padding: 10px 20px;
  background-color: #00b9a3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background-color: #59a492;
  }
`;

export const BackButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;

export const PlaylistDetailsWrapper = styled.div`
  margin-top: 20px;
`;
