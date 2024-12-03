import React from 'react';
import { PlaylistListContainer, PlaylistItem, PlaylistText, Button, DeleteButton, NoPlaylistsMessage } from '../styles/PlaylistList.styles';

const PlaylistList = ({ playlists, onDelete, onOpen, loading }) => (
  <PlaylistListContainer>
    {playlists.length > 0 ? (
      <ul>
        {playlists.map((playlist) => (
          <PlaylistItem key={playlist._id}>
            <PlaylistText>
              <strong>{playlist._name || 'Nome inválido'}</strong>: {playlist._description || 'Sem descrição'}
            </PlaylistText>
            <div>
              <Button onClick={() => onOpen(playlist._id)}>Abrir Playlist</Button>
              <DeleteButton onClick={() => onDelete(playlist._id)} disabled={loading}>
                {loading ? 'Deletando...' : 'Deletar Playlist'}
              </DeleteButton>
            </div>
          </PlaylistItem>
        ))}
      </ul>
    ) : (
      <NoPlaylistsMessage>Você ainda não tem playlists.</NoPlaylistsMessage>
    )}
  </PlaylistListContainer>
);

export default PlaylistList;
