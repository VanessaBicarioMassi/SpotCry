import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer, Title, ButtonContainer, StyledButton } from '../styles/HomePage.styles';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <Title>Bem-vindo</Title>
      <ButtonContainer>
        <StyledButton onClick={() => navigate('/songs')}>Ir para Músicas</StyledButton>
        <StyledButton onClick={() => navigate('/playlists')}>Ir para Playlists</StyledButton>
      </ButtonContainer>
    </PageContainer>
  );
};

export default HomePage;
