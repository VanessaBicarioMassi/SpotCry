import React from 'react';

const SongList = ({ songs, onRemove, loading }) => (
  <div>
    <h2>Músicas da Playlist</h2>
    {songs.length > 0 ? (
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            <strong>{song.title || 'Título indisponível'}</strong> - {song.artist || 'Artista desconhecido'}
            <br />
            <a href={song.url} target="_blank" rel="noopener noreferrer">
              Ouvir Música
            </a>
            <button
              onClick={() => onRemove(song.id)}
              style={{ marginLeft: '10px', color: 'red' }}
              disabled={loading}
            >
              Remover Música
            </button>
          </li>
        ))}
      </ul>
    ) : (
      <p>Não há músicas nesta playlist.</p>
    )}
  </div>
);

export default SongList;
