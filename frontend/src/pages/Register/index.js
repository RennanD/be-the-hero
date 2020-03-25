import React from 'react';

import { FiArrowLeft } from 'react-icons/fi';

import { Container, Content, InputGroup } from './styles';
import { LinkButton, Button } from '../../styles/global';

import logoImg from '../../assets/logo.svg';

export default function Register() {
  return (
    <Container>
      <Content>
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastro</h1>

          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>

          <LinkButton to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Já tenho cadastro
          </LinkButton>
        </section>

        <form>
          <input placeholder="Nome da ONG" />
          <input type="email" placeholder="E-mail" />
          <input placeholder="Whatsapp" />

          <InputGroup>
            <input placeholder="Cidade" />
            <input placeholder="UF" style={{ width: 80 }} />
          </InputGroup>

          <Button type="submit">Cadastrar</Button>
        </form>
      </Content>
    </Container>
  );
}
