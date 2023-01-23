import { Button } from '@components/Button';
import React from 'react';

// importe dos estilos da aplicação
import {
  Container,
  Title,
  ContainerButton
} from './styles';

type screenProps = {
  screenTitle: string;
  buttonTitle: string;
  styleButton?: any;
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
          style={props.styleButton}
        />
      </ContainerButton>
    </Container>
  );
};