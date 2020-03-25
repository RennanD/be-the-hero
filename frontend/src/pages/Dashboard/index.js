import React from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import { Container, AddButton, LogoutButton } from './styles';

import logoImg from '../../assets/logo.svg';

export default function Dashboard({ history }) {
  return (
    <Container>
      <header>
        <img src={logoImg} alt="Be The Hero" />

        <span>Bem vinda, Apipa</span>

        <AddButton
          type="button"
          onClick={() => {
            history.push('/incidents/new');
          }}
        >
          Cadastrar novo caso
        </AddButton>

        <LogoutButton type="button">
          <FiPower size={18} color="#e02041" />
        </LogoutButton>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        <li>
          <strong>CASO: </strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO: </strong>
          <p>Descrição teste</p>

          <strong>VALOR: </strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>CASO: </strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO: </strong>
          <p>Descrição teste</p>

          <strong>VALOR: </strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>CASO: </strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO: </strong>
          <p>Descrição teste</p>

          <strong>VALOR: </strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>CASO: </strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO: </strong>
          <p>Descrição teste</p>

          <strong>VALOR: </strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
      </ul>
    </Container>
  );
}
