import React from 'react';
import { Linking } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import email from 'react-native-email';

import { useNavigation } from '@react-navigation/native';

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
  const messege =
    'Olá Apipa, estou entrando em contato pois gostaria de ajudar no caso "Caso 1" com o valor de "R$120" ';

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=5586995172761&text=${messege}`);
  }

  async function sendMail() {
    email('rennan@dombarreto.com', {
      subject: 'Herói do caso: Gatinho resgatado',
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
        <IncidentValue>Apipa</IncidentValue>

        <IncidentProp>Caso: </IncidentProp>
        <IncidentValue>Caso teste</IncidentValue>

        <IncidentProp>Preço: </IncidentProp>
        <IncidentValue>$120 R$</IncidentValue>
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
