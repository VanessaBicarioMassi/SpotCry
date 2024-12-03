import React, { useState } from 'react';
import { AddSongFormContainer, AddSongFormTitle, AddSongInput, AddSongButton, ErrorMessage } from '../styles/AddSongForm.styles';

const AddSongForm = ({ onAdd, loading }) => {
  const [songId, setSongId] = useState('');
  const [error, setError] = useState('');

  const handleAdd = () => {
    if (!songId.trim()) {
      setError('O ID da música é obrigatório.');
      return;
    }
    setError('');
    onAdd(songId);
    setSongId('');
  };

  return (
    <AddSongFormContainer>
      <AddSongFormTitle>Adicionar Música à Playlist</AddSongFormTitle>
      <div>
        <AddSongInput
          type="text"
          placeholder="ID da Música"
          value={songId}
          onChange={(e) => setSongId(e.target.value)}
          required
        />
        <AddSongButton onClick={handleAdd} disabled={loading}>
          {loading ? 'Adicionando...' : 'Adicionar Música'}
        </AddSongButton>
      </div>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </AddSongFormContainer>
  );
};

export default AddSongForm;
