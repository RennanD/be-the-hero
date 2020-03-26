import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import { Container, Content } from './styles';

import { LinkButton, Button } from '../../styles/global';

import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

export default function NewIncident() {
  const ongId = localStorage.getItem('ong_id');

  const history = useHistory();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post(
        '/incidents',
        {
          title,
          description,
          price,
        },
        {
          headers: {
            Authorization: ongId,
          },
        }
      );

      alert('Caso cadastrado com sucesso');

      history.push('/dashboard');
    } catch (err) {
      alert('Verifique se preencheu os campos corretamente');
    }
  }

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

        <form onSubmit={handleSubmit}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título do caso"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descrição"
          />
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Valor em reais"
          />

          <Button type="submit">Cadastrar</Button>
        </form>
      </Content>
    </Container>
  );
}
