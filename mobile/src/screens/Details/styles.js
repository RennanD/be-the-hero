import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  padding-top: ${Platform.OS === 'ios' ? 60 : 30}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.Image``;

export const IncidentCard = styled.View`
  padding: 24px;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 16px;
  margin-top: 48px;
`;

export const IncidentProp = styled.Text`
  font-size: 14px;
  color: #41414b;
  margin-top: 24px;
  font-weight: bold;
`;

export const IncidentValue = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  color: #737380;
`;

export const ContactCard = styled.View`
  padding: 24px;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 16px;
`;

export const HeroTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #13131a;
  line-height: 30px;
`;

export const HeroDescription = styled.Text`
  font-size: 15px;
  color: #737380;
  margin-top: 16px;
`;

export const Actions = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ActionButton = styled.TouchableOpacity`
  background: #e02041;
  height: 50px;
  border-radius: 8px;
  width: 48%;
  align-items: center;
  justify-content: center;
`;

export const ActionButtonText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;

export const BackButton = styled.TouchableOpacity``;
