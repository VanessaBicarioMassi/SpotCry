import React from 'react';
import { ListContainer, SongItem, EmptyMessage } from '../styles/SongList.styles';

const SongList = ({ songs }) => (
  <ListContainer>
    <h2>Músicas Existentes</h2>
    <ul>
      {songs && songs.length > 0 ? (
        songs.map((song) => (
          <SongItem key={song.id}>
            {song.id} - {song.title} - {song.artist} - <a href={song.url}>Ouvir</a>
          </SongItem>
        ))
      ) : (
        <EmptyMessage>Nenhuma música encontrada.</EmptyMessage>
      )}
    </ul>
  </ListContainer>
);

export default SongList;
