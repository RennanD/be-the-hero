import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { FiLogIn } from 'react-icons/fi';

import { Container, FormSection } from './styles';

import { Button, LinkButton } from '../../styles/global';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

export default function Logon() {
  const [ong_id, setId] = useState('');
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post('/sessions', { ong_id });

      localStorage.setItem('ong_id', ong_id);
      localStorage.setItem('ong_name', response.data.name);

      history.push('/dashboard');
    } catch (error) {
      alert('Falha no login, tente novamente');
    }
  }

  return (
    <Container>
      <FormSection>
        <img src={logoImg} alt="Be the hero" />

        <form onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>

          <input
            value={ong_id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Sua ID"
          />
          <Button type="submit">Entrar</Button>

          <LinkButton to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </LinkButton>
        </form>
      </FormSection>
      <img src={heroesImg} alt="Heroes" />
    </Container>
  );
}
