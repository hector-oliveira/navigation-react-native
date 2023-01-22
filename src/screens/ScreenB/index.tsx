import React from 'react';

import { ScreenComponents } from '@components/ScreenComponents';

// importe dos estilos da aplicação
import {
  Container,
} from './styles';

export const ScreenB = ({navigation}) => {
  const handleClickNavigation = () => {
    // navegação para a tela A
    navigation.navigate('ScreenA');
  }
  return (
    <Container>
      <ScreenComponents 
        screenTitle='Página B'
        buttonTitle='Clique para ir à tela A'
        onNavigation={handleClickNavigation}
      />
    </Container>
  );
};