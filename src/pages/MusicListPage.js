import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useSongs } from '../hooks/useSongs';
import CreateSongForm from '../components/CreateSongForm';
import { MusicPageContainer, MusicPageTitle, ContentContainer, NoSongsMessage } from '../styles/MusicListPage.styles';
import { HomeButton } from '../styles/HomeButton.styles';
import { useNavigate } from 'react-router-dom';

const MusicListPage = () => {
    const { token } = useAuth();
    const { fetchSongs, songs } = useSongs(token);
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/home');
    };

    useEffect(() => {
        fetchSongs();
    }, [fetchSongs]);

    return (
        <MusicPageContainer>
            <HomeButton onClick={handleGoHome}>Voltar</HomeButton>
            <MusicPageTitle>Suas Músicas</MusicPageTitle>

            <ContentContainer>
                {songs && songs.length === 0 ? (
                    <NoSongsMessage>Você ainda não tem músicas.</NoSongsMessage>
                ) : (
                    <CreateSongForm onSongCreated={fetchSongs} />
                )}
            </ContentContainer>
        </MusicPageContainer>
    );
};

export default MusicListPage;
