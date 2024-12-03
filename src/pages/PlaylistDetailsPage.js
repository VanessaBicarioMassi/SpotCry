import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePlaylistDetails } from '../hooks/usePlaylistDetails';
import PlaylistHeader from '../components/PlaylistHeader';
import SongList from '../components/SongList';
import AddSongForm from '../components/AddSongForm';
import { useAuth } from '../context/AuthContext';
import { PlaylistDetailsContainer, BackButton, ErrorMessage, PlaylistDetailsWrapper, BackButtonWrapper } from '../styles/PlaylistDetailsPage.styles';

const PlaylistDetailsPage = () => {
    const { token } = useAuth();
    const { playlistId } = useParams();
    const {
        songs,
        playlistName,
        fetchSongs,
        addSong,
        updatePlaylistName,
        removeSong,
        loading,
        error,
    } = usePlaylistDetails(playlistId, token);
    const navigate = useNavigate();

    useEffect(() => {
        fetchSongs();
    }, [fetchSongs]);

    return (
        <PlaylistDetailsContainer>

            <PlaylistHeader
                playlistName={playlistName}
                onUpdate={updatePlaylistName}
                loading={loading}
            />

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <PlaylistDetailsWrapper>
                <SongList songs={songs} onRemove={removeSong} loading={loading} />
                <AddSongForm onAdd={addSong} loading={loading} />
            </PlaylistDetailsWrapper>
            <BackButtonWrapper>
                <BackButton onClick={() => navigate('/playlists')}>
                    Voltar para Playlists
                </BackButton>
            </BackButtonWrapper>
        </PlaylistDetailsContainer>
    );
};

export default PlaylistDetailsPage;
