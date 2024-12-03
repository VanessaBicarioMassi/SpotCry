import { useState, useCallback } from 'react';
import { getPlaylists, createPlaylist, deletePlaylist } from '../api/apiClient';

export const usePlaylists = (token) => {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchPlaylists = useCallback(async () => {
    try {
      const data = await getPlaylists(token);
      setPlaylists(data);
    } catch (err) {
      console.error('Erro ao buscar playlists:', err.message);
      setError('Erro ao carregar playlists.');
    }
  }, [token]);

  const addPlaylist = async (name, description) => {
    if (!name.trim() || !description.trim()) {
      alert('Nome e descrição da playlist são obrigatórios.');
      return;
    }

    setLoading(true);
    try {
      await createPlaylist(name, description, token);
      alert('Playlist criada com sucesso!');
      fetchPlaylists();
    } catch (err) {
      console.error('Erro ao criar playlist:', err.message);
      setError('Erro ao criar playlist.');
    } finally {
      setLoading(false);
    }
  };

  const removePlaylist = async (playlistId) => {
    const confirmDelete = window.confirm('Tem certeza que deseja deletar esta playlist?');
    if (!confirmDelete) return;

    setLoading(true);
    try {
      await deletePlaylist(playlistId, token);
      alert('Playlist deletada com sucesso!');
      fetchPlaylists();
    } catch (err) {
      console.error('Erro ao deletar playlist:', err.message);
      setError('Erro ao deletar playlist.');
    } finally {
      setLoading(false);
    }
  };

  return {
    playlists,
    fetchPlaylists,
    addPlaylist,
    removePlaylist,
    loading,
    error,
  };
};
