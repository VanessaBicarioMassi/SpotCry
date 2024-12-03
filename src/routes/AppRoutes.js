import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import LoginPage from '../pages/LoginPage';
import UserDetailsPage from '../pages/Home';
import MusicListPage from '../pages/MusicListPage';
import PlaylistPage from '../pages/PlaylistPage';
import PlaylistDetailsPage from '../pages/PlaylistDetailsPage';
import CreateSongForm from '../components/CreateSongForm';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route
      path="/home"
      element={
        <PrivateRoute>
          <UserDetailsPage />
        </PrivateRoute>
      }
    />
    <Route
      path="/songs"
      element={
        <PrivateRoute>
          <MusicListPage />
        </PrivateRoute>
      }
    />
    <Route
      path="/playlists"
      element={
        <PrivateRoute>
          <PlaylistPage />
        </PrivateRoute>
      }
    />
    <Route
      path="/playlists/:playlistId"
      element={
        <PrivateRoute>
          <PlaylistDetailsPage />
        </PrivateRoute>
      }
    />
    <Route
      path="/create-song"
      element={
        <PrivateRoute>
          <CreateSongForm />
        </PrivateRoute>
      }
    />
  </Routes>
);

export default AppRoutes;
