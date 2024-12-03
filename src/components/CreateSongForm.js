import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useSongs } from '../hooks/useSongs';
import SongForm from './SongForm';
import SongList from './SongList';
import { Container } from '../styles/CreateSongForm.styles';

const CreateSongForm = ({ onSongCreated }) => {
  const { token } = useAuth();
  const { songs, fetchSongs, addSong, loading } = useSongs(token);

  useEffect(() => {
    fetchSongs();
  }, [fetchSongs]);

  const handleCreateSong = (title, artist, url) => {
    addSong(title, artist, url);
    if (onSongCreated) onSongCreated();
  };

  return (
    <Container>
      <SongForm onSubmit={handleCreateSong} loading={loading} />
      <SongList songs={songs} />
    </Container>
  );
};

export default CreateSongForm;
