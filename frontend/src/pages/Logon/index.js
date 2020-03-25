import React from 'react';
import { Link } from 'react-router-dom';

import { FiLogIn } from 'react-icons/fi';

import { Container, FormSection } from './styles';

import { Button } from '../../styles/global';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {
  return (
    <Container>
      <FormSection>
        <img src={logoImg} alt="Be the hero" />

        <form>
          <h1>Faça seu logon</h1>

          <input placeholder="Sua ID" />
          <Button type="submit">Entrar</Button>

          <Link to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </FormSection>
      <img src={heroesImg} alt="Heroes" />
    </Container>
  );
}
