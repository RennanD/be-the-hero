import React, { useState, useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Header,
  Logo,
  HeaderText,
  Bold,
  Title,
  Description,
  IncidentList,
  IncidentCard,
  IncidentProp,
  IncidentValue,
  DetailsButton,
  DetailsButtonText,
} from './styles';

import logo from '~/assets/logo.png';

import api from '~/services/api';

export default function Home() {
  const { navigate } = useNavigation();

  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function loadIncidents() {
      const response = await api.get('/incidents');

      const data = response.data.map((incident) => ({
        ...incident,
        priceFormatted: Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(incident.price),
      }));

      setIncidents(data);
      setTotal(response.headers['x-total-count']);
    }
    loadIncidents();
  }, []);

  async function handleShowIncident(incident) {
    navigate('Details', { incident });
  }

  return (
    <Container>
      <Header>
        <Logo source={logo} />
        <HeaderText>
          Total de <Bold>{total} caso(s)</Bold>{' '}
        </HeaderText>
      </Header>

      <Title>Bem vindo!</Title>

      <Description>Escolha um dos casos abaixo e salve o dia.</Description>

      <IncidentList
        data={incidents}
        keyExtractor={(incident) => String(incident.id)}
        renderItem={({ item }) => (
          <IncidentCard>
            <IncidentProp>ONG: </IncidentProp>
            <IncidentValue>{item.name}</IncidentValue>

            <IncidentProp>Caso: </IncidentProp>
            <IncidentValue>{item.title}</IncidentValue>

            <IncidentProp>Preço: </IncidentProp>
            <IncidentValue>{item.priceFormatted}</IncidentValue>

            <DetailsButton onPress={() => handleShowIncident(item)}>
              <DetailsButtonText>Ver mais detalhes</DetailsButtonText>
              <Icon name="arrow-right" size={16} color="#e02041" />
            </DetailsButton>
          </IncidentCard>
        )}
      />
    </Container>
  );
}
