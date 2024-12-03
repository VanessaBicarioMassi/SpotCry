import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const BASE_URL = 'https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default'; 

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAuthToken = (token) => {
  if (token) {
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete apiClient.defaults.headers.common['Authorization'];
  }
};

export const login = async (email, password) => {
  const response = await apiClient.post('/user/login', { email, password });
  return response.data;
};  

export const getPlaylists = async (token) => {
    try {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.id; 
  
      const response = await apiClient.get(`/playlist/user/${userId}/playlists`, {
        headers: {
          Authorization: token, 
        },
      });
      return response.data.playlists; 
    } catch (error) {
      console.error('Erro ao listar playlists por usuário:', error.response?.data || error.message);
      throw error;
    }
  };
  

  export const createPlaylist = async (name, description, token) => {
    try {
      const response = await apiClient.post(
        '/playlist',
        {
          name,
          description, 
          songs: [], 
          userId: token, 
        },
        {
          headers: {
            Authorization: token, 
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('Erro ao criar playlist:', error.response?.data || error.message);
      throw error;
    }
  };
  
export const createSong = async (title, artist, url, token) => {
  try {
    const response = await apiClient.post(
      '/song',
      { title, artist, url },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Erro ao criar música:', error.response?.data || error.message);
    throw error;
  }
};
  
export const getSongs = async (token) => {
    try {
      const response = await apiClient.get('/song', {
        headers: {
          Authorization: token,
        },
      });
      return response.data.songs; 
    } catch (error) {
      console.error('Erro ao listar músicas:', error.response?.data || error.message);
      throw error;
    }
  };    
  
  export const getPlaylistTracks = async (playlistId, token) => {
    try {
      const response = await apiClient.get(`/playlist/${playlistId}/song`, {
        headers: {
          Authorization: token,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar músicas da playlist:', error.response?.data || error.message);
      throw error;
    }
  };

    export const addTrackToPlaylist = async (playlistId, songId, token) => {
        try {
          const response = await apiClient.post(`/playlist/${playlistId}/song`,
             { songId }, 
            {
              headers: {
                Authorization: token, 
              },
            }
          );
          return response.data;
        } catch (error) {
          console.error('Erro ao adicionar música à playlist:', error.response?.data || error.message);
          throw error;
        }
    }
  
    export const getSongDetails = async (songId, token) => {
        try {
          const response = await apiClient.get(`/song/${songId}`, {
            headers: {
              Authorization: token,
            },
          });
          return response.data; 
        } catch (error) {
          console.error('Erro ao buscar detalhes da música:', error.response?.data || error.message);
          throw error;
        }
      };
      
  
  
      export const updatePlaylist = async (playlistId, updatedData, token) => {
        try {
          const response = await apiClient.patch(`/playlist/${playlistId}`, updatedData, {
            headers: {
              Authorization: token,
            },
          });
          return response.data; 
        } catch (error) {
          console.error('Erro ao atualizar a playlist:', error.response?.data || error.message);
          throw error;
        }
      };
      
  
  
  
  export const deletePlaylist = async (playlistId, token) => {
    try {
      const response = await apiClient.delete(`/playlist/${playlistId}`, {
        headers: {
          Authorization: token,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao deletar playlist:', error.response?.data || error.message);
      throw error;
    }
  };

  export const removeTrackFromPlaylist = async (playlistId, songId, token) => {
    try {
      const response = await apiClient.delete(`/playlist/${playlistId}/song/${songId}`, {
        headers: {
          Authorization: token, 
        },
      });
      return response.data; 
    } catch (error) {
      console.error('Erro ao remover música da playlist:', error.response?.data || error.message);
      throw error;
    }
  };
  
export default apiClient;
