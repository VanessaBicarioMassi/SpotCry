import { useState, useCallback } from 'react';
import {
  getPlaylistTracks,
  addTrackToPlaylist,
  getSongDetails,
  updatePlaylist,
  removeTrackFromPlaylist,
} from '../api/apiClient';

export const usePlaylistDetails = (playlistId, token) => {
  const [songs, setSongs] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchSongs = useCallback(async () => {
    try {
      const data = await getPlaylistTracks(playlistId, token);
      setPlaylistName(data.name);

      const songDetailsPromises = data.songs.map(async (id) => {
        const songData = await getSongDetails(id, token);
        return songData.song;
      });

      const songDetails = await Promise.all(songDetailsPromises);
      setSongs(songDetails);
    } catch (err) {
      console.error('Erro ao buscar músicas da playlist:', err.message);
      setError('Erro ao carregar músicas.');
    }
  }, [playlistId, token]);

  const addSong = async (songId) => {
    setLoading(true);
    try {
      await addTrackToPlaylist(playlistId, songId, token);
      alert('Música adicionada com sucesso!');
      fetchSongs();
    } catch (err) {
      console.error('Erro ao adicionar música:', err.message);
      setError('Erro ao adicionar música.');
    } finally {
      setLoading(false);
    }
  };

  const updatePlaylistName = async (newName) => {
    setLoading(true);
    try {
      await updatePlaylist(playlistId, { name: newName }, token);
      alert('Nome atualizado com sucesso!');
      setPlaylistName(newName);
    } catch (err) {
      console.error('Erro ao atualizar playlist:', err.message);
      setError('Erro ao atualizar playlist.');
    } finally {
      setLoading(false);
    }
  };

  const removeSong = async (songId) => {
    setLoading(true);
    try {
      await removeTrackFromPlaylist(playlistId, songId, token);
      alert('Música removida com sucesso!');
      fetchSongs();
    } catch (err) {
      console.error('Erro ao remover música:', err.message);
      setError('Erro ao remover música.');
    } finally {
      setLoading(false);
    }
  };

  return {
    songs,
    playlistName,
    fetchSongs,
    addSong,
    updatePlaylistName,
    removeSong,
    loading,
    error,
  };
};
