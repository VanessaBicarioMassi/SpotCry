import React, { useState } from 'react';
import { FormContainer, FormTitle, Input, Button } from '../styles/PlaylistForm.styles';

const PlaylistForm = ({ onCreate, loading }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(name, description);
    setName('');
    setDescription('');
  };

  return (
    <FormContainer>
      <FormTitle>Criar Nova Playlist</FormTitle>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nome da nova playlist"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Descrição da nova playlist"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <Button type="submit" disabled={loading}>
          {loading ? 'Criando...' : 'Criar Playlist'}
        </Button>
      </form>
    </FormContainer>
  );
};

export default PlaylistForm;
