import styled from 'styled-components';

export const MusicPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #768e81;
  min-height: 100vh;
`;

export const MusicPageTitle = styled.h1`
  color: #a11844;
  font-size: 32px;
  margin-bottom: 20px;
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
`;

export const NoSongsMessage = styled.p`
  color: #a11844;
  font-size: 18px;
  text-align: center;
`;
