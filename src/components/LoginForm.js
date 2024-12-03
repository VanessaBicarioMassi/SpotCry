import React, { useState } from 'react';
import { login, setAuthToken } from '../api/apiClient';
import {
  FormContainer,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledTitle,
} from '../styles/LoginForm.styles';

const LoginForm = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      setAuthToken(data.token);
      onLoginSuccess(data.token);
    } catch (error) {
      console.error('Erro no login:', error.message);
      alert('Falha ao fazer login. Verifique suas credenciais.');
    }
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <StyledTitle>Login</StyledTitle>
        <StyledInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <StyledInput
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <StyledButton type="submit">Entrar</StyledButton>
      </StyledForm>
    </FormContainer>
  );
};

export default LoginForm;
