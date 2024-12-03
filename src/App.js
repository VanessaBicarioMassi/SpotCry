import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import GlobalStyles from './styles/globalStyles';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <AuthProvider>
      <GlobalStyles />
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
};

export default App;
