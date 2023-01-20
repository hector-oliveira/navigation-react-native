import React from 'react';
import { Alert } from 'react-native';

// importe dos componentes da aplicação
import { Button } from '@components/Button';

// importe dos estilos da aplicação
import {
  Container,
  Title,
  ContainerButton
} from './styles';

export const ScreenA = () => {

  const handleButton = (txt: string) => {
    Alert.alert(`Você clicou no botão ${txt}`);
  }
  return (
    <Container>
      <Title>Clique no botão abaixo</Title>
      <ContainerButton>
        <Button 
          title="A"
          onPress={() => handleButton('A')}
        />
      </ContainerButton>
    </Container>
  );
};