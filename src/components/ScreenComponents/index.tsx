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

type screenProps = {
  screenTitle: string;
  buttonTitle: string;
  onNavigation: () => void;
}

export const ScreenComponents = (props: screenProps) => {

  return (
    <Container>
      <Title>{props.screenTitle}</Title>
      <ContainerButton>
        <Button 
          title={props.buttonTitle}
          onPress={props.onNavigation}
        />
      </ContainerButton>
    </Container>
  );
};