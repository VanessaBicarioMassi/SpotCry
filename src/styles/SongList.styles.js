import styled from 'styled-components';

export const ListContainer = styled.div`
  background-color: #59a492;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  color: #ffffff;
`;

export const SongItem = styled.li`
  margin-bottom: 10px;
  font-size: 16px;

  a {
    color: #a11844;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const EmptyMessage = styled.p`
  color: #ffffff;
  font-style: italic;
`;
