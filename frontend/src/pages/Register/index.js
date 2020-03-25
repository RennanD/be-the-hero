import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import { Container, Content, InputGroup } from './styles';
import { LinkButton, Button } from '../../styles/global';

import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };

    try {
      const response = await api.post('/ongs', data);

      alert(`Seu ID de acesso ${response.data.id}`);

      history.push('/');
    } catch (err) {
      alert('Erro ao cadastrar, verifique se os dados estão correto.');
    }
  }
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

        <form onSubmit={handleSubmit}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome da ONG"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
          />
          <input
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            placeholder="Whatsapp"
          />

          <InputGroup>
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Cidade"
            />
            <input
              value={uf}
              onChange={(e) => setUf(e.target.value)}
              placeholder="UF"
              style={{ width: 80 }}
            />
          </InputGroup>

          <Button type="submit">Cadastrar</Button>
        </form>
      </Content>
    </Container>
  );
}
