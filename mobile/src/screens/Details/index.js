import React from 'react';
import { Linking } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import email from 'react-native-email';

import { useNavigation, useRoute } from '@react-navigation/native';

import {
  Container,
  Header,
  Logo,
  BackButton,
  IncidentProp,
  IncidentCard,
  IncidentValue,
  ContactCard,
  HeroTitle,
  HeroDescription,
  Actions,
  ActionButton,
  ActionButtonText,
} from './styles';

import logo from '~/assets/logo.png';

export default function Details() {
  const { goBack } = useNavigation();
  const { params } = useRoute();
  const { incident } = params;
  const messege = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso *${incident.title}* com o valor de *${incident.priceFormatted}* `;

  function sendWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=55${incident.whatsapp}&text=${messege}`
    );
  }

  async function sendMail() {
    email(incident.email, {
      subject: `Herói do caso: ${incident.title}`,
      body: messege,
    }).catch();
  }

  return (
    <Container>
      <Header>
        <Logo source={logo} />
        <BackButton onPress={() => goBack()}>
          <Icon name="arrow-left" size={28} color="#e02041" />
        </BackButton>
      </Header>

      <IncidentCard>
        <IncidentProp style={{ marginTop: 0 }}>ONG: </IncidentProp>
        <IncidentValue>
          {incident.name} ONG de {incident.city} - {incident.uf}{' '}
        </IncidentValue>

        <IncidentProp>Caso: </IncidentProp>
        <IncidentValue>{incident.title}</IncidentValue>

        <IncidentProp>Descrição: </IncidentProp>
        <IncidentValue>{incident.description}</IncidentValue>

        <IncidentProp>Preço: </IncidentProp>
        <IncidentValue>{incident.priceFormatted}</IncidentValue>
      </IncidentCard>

      <ContactCard>
        <HeroTitle>Salve o dia!</HeroTitle>
        <HeroTitle>Seja o herói desse caso.</HeroTitle>
        <HeroDescription>Entre em contato</HeroDescription>

        <Actions>
          <ActionButton onPress={sendWhatsapp}>
            <ActionButtonText>Whatsapp</ActionButtonText>
          </ActionButton>

          <ActionButton onPress={sendMail}>
            <ActionButtonText>E-mail</ActionButtonText>
          </ActionButton>
        </Actions>
      </ContactCard>
    </Container>
  );
}
