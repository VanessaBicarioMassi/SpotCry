import styled from 'styled-components';

export const PlaylistListContainer = styled.div`
  width: 80%;
  margin: 20px auto;
  background-color: #768e81;
  padding: 20px;
  border-radius: 8px;
`;

export const PlaylistItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #59a492;
  border-radius: 5px;
  list-style-type: none;
`;

export const PlaylistText = styled.span`
  color: #ffffff;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #00b9a3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #59a492;
  }

  &:disabled {
    background-color: #768e81;
    cursor: not-allowed;
  }
`;

export const DeleteButton = styled(Button)`
  background-color: #9c4352;
  color: white;

  &:hover {
    background-color: #945f62;
  }
`;

export const NoPlaylistsMessage = styled.p`
  color: #a11844;
  text-align: center;
  font-size: 18px;
`;
