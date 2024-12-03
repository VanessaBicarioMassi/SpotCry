import React, { useState } from 'react';
import { FormContainer, StyledInput, StyledButton } from '../styles/SongForm.styles';

const SongForm = ({ onSubmit, loading }) => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(title, artist, url);
    setTitle('');
    setArtist('');
    setUrl('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h2>Criar Nova Música</h2>
      <StyledInput
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <StyledInput
        type="text"
        placeholder="Artista"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        required
      />
      <StyledInput
        type="text"
        placeholder="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <StyledButton type="submit" disabled={loading}>
        {loading ? 'Criando...' : 'Criar Música'}
      </StyledButton>
    </FormContainer>
  );
};

export default SongForm;
