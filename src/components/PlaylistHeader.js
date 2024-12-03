import React, { useState } from 'react';
import { PlaylistHeaderContainer, PlaylistHeaderTitle, UpdateNameSection, UpdateInput, UpdateButton, ErrorMessage } from '../styles/PlaylistHeader.styles';

const PlaylistHeader = ({ playlistName, onUpdate, loading }) => {
  const [newName, setNewName] = useState('');
  const [error, setError] = useState('');

  const handleUpdate = () => {
    if (!newName.trim()) {
      setError('O novo nome é obrigatório.');
      return;
    }
    setError('');
    onUpdate(newName);
    setNewName('');
  };

  return (
    <PlaylistHeaderContainer>
      <PlaylistHeaderTitle>Músicas da Playlist</PlaylistHeaderTitle>

      <UpdateNameSection>
        <h3>Alterar Nome</h3>
        <div>
          <UpdateInput
            type="text"
            placeholder="Novo nome da playlist"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            required
          />
          <UpdateButton onClick={handleUpdate} disabled={loading}>
            {loading ? 'Atualizando...' : 'Atualizar Nome'}
          </UpdateButton>
        </div>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </UpdateNameSection>
    </PlaylistHeaderContainer>
  );
};

export default PlaylistHeader;
