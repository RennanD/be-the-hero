import React from 'react';

import { FiArrowLeft } from 'react-icons/fi';

import { Container, Content } from './styles';

import { LinkButton, Button } from '../../styles/global';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
  return (
    <Container>
      <Content>
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastrar novo caso</h1>

          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <LinkButton to="/dashboard">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para o dashboard
          </LinkButton>
        </section>

        <form>
          <input placeholder="Título do caso" />
          <textarea placeholder="Descrição" />
          <input placeholder="Valor em reais" />

          <Button type="submit">Cadastrar</Button>
        </form>
      </Content>
    </Container>
  );
}
