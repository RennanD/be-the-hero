import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import { Container, AddButton, LogoutButton } from './styles';

import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

export default function Dashboard() {
  const [incidents, setIncidents] = useState([]);

  const ongName = localStorage.getItem('ong_name');
  const ongId = localStorage.getItem('ong_id');

  const history = useHistory();

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

  async function handleDelete(id) {
    try {
      await api.delete(`/incidents/${id}`, {
        headers: {
          Authorization: ongId,
        },
      });

      setIncidents(incidents.filter((incident) => incident.id !== id));
    } catch (error) {
      alert('Erro ao deletar');
    }
  }

  function handleLogOut() {
    localStorage.clear();
    history.push('/');
  }

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

        <LogoutButton onClick={handleLogOut} type="button">
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

            <button onClick={() => handleDelete(incident.id)} type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
}
