import React, { useEffect, useState } from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import { Container, AddButton, LogoutButton } from './styles';

import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

export default function Dashboard({ history }) {
  const [incidents, setIncidents] = useState([]);

  const ongName = localStorage.getItem('ong_name');
  const ongId = localStorage.getItem('ong_id');

  useEffect(() => {
    async function loadIncidents() {
      const response = await api.get('/profile', {
        headers: {
          Authorization: ongId,
        },
      });

      const data = response.data.map((incident) => ({
        ...incident,
        priceFormated: Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(incident.price),
      }));

      setIncidents(data);
    }

    loadIncidents();
  }, [ongId]);

  return (
    <Container>
      <header>
        <img src={logoImg} alt="Be The Hero" />

        <span>Bem vinda, {ongName}</span>

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
        {incidents.map((incident) => (
          <li key={incident.id}>
            <strong>CASO: </strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO: </strong>
            <p>{incident.description}</p>

            <strong>VALOR: </strong>
            <p>{incident.priceFormated}</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
}
