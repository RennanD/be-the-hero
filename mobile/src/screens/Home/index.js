import React from 'react';

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

export default function Home() {
  const { navigate } = useNavigation();
  return (
    <Container>
      <Header>
        <Logo source={logo} />
        <HeaderText>
          Total de <Bold>0 casos</Bold>{' '}
        </HeaderText>
      </Header>

      <Title>Bem vindo!</Title>

      <Description>Escolha um dos casos abaixo e salve o dia.</Description>

      <IncidentList
        data={[1, 2, 3]}
        keyExtractor={(incident) => String(incident)}
        renderItem={({ item }) => (
          <IncidentCard>
            <IncidentProp>ONG: </IncidentProp>
            <IncidentValue>Apipa</IncidentValue>

            <IncidentProp>Caso: </IncidentProp>
            <IncidentValue>Caso teste</IncidentValue>

            <IncidentProp>Preço: </IncidentProp>
            <IncidentValue>$120 R$</IncidentValue>

            <DetailsButton onPress={() => navigate('Details')}>
              <DetailsButtonText>Ver mais detalhes</DetailsButtonText>
              <Icon name="arrow-right" size={16} color="#e02041" />
            </DetailsButton>
          </IncidentCard>
        )}
      />
    </Container>
  );
}
