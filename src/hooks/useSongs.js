import { useState, useCallback } from 'react';
import { getSongs, createSong } from '../api/apiClient';

export const useSongs = (token) => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchSongs = useCallback(async () => {
    try {
      const data = await getSongs(token);
      setSongs(data);
    } catch (err) {
      console.error('Erro ao buscar músicas:', err.message);
      setError('Erro ao carregar músicas.');
    }
  }, [token]);

  const addSong = async (title, artist, url) => {
    if (!title.trim() || !artist.trim() || !url.trim()) {
      alert('Todos os campos são obrigatórios.');
      return;
    }
    if (!url.startsWith('http')) {
      alert('A URL deve ser válida e começar com "http".');
      return;
    }

    setLoading(true);
    try {
      await createSong(title, artist, url, token);
      alert('Música criada com sucesso!');
      fetchSongs();
    } catch (err) {
      console.error('Erro ao criar música:', err.message);
      setError('Erro ao criar música.');
    } finally {
      setLoading(false);
    }
  };

  return {
    songs,
    fetchSongs,
    addSong,
    loading,
    error,
  };
};
