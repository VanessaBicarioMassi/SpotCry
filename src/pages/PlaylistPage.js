import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { usePlaylists } from '../hooks/usePlaylists';
import PlaylistForm from '../components/PlaylistForm';
import PlaylistList from '../components/PlaylistList';
import { useNavigate } from 'react-router-dom';
import { PageContainer, Title, ErrorMessage, ContentContainer } from '../styles/PlaylistPage.styles';
import { HomeButton } from '../styles/HomeButton.styles';


const PlaylistPage = () => {
  const { token } = useAuth();
  const {
    playlists,
    fetchPlaylists,
    addPlaylist,
    removePlaylist,
    loading,
    error,
  } = usePlaylists(token);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPlaylists();
  }, [fetchPlaylists]);

  const handleCreatePlaylist = (name, description) => {
    addPlaylist(name, description);
  };

  const handleDeletePlaylist = (playlistId) => {
    removePlaylist(playlistId);
  };

  const handleGoHome = () => {
    navigate('/home');
  };

  const handleOpenPlaylist = (playlistId) => {
    navigate(`/playlists/${playlistId}`);
  };

  return (
    <PageContainer>
    <HomeButton onClick={handleGoHome}>Voltar</HomeButton>
      <Title>Suas Playlists</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}

      <ContentContainer>
        <PlaylistList
          playlists={playlists}
          onDelete={handleDeletePlaylist}
          onOpen={handleOpenPlaylist}
          loading={loading}
        />
      </ContentContainer>

      <div style={{ marginTop: '20px' }}>
        <PlaylistForm onCreate={handleCreatePlaylist} loading={loading} />
      </div>
    </PageContainer>
  );
};

export default PlaylistPage;
