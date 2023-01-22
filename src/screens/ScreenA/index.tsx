import React from 'react';

// impote dos componentes da aplicação
import { ScreenComponents } from '@components/ScreenComponents';

// importe dos estilos da aplicação
import {
  Container
} from './styles';

export const ScreenA = ({navigation}) => {
  const handleClickNavigation = () => {
    // navegação para a tela B
    navigation.navigate('ScreenB');
  };
  return (
    <Container>
      <ScreenComponents 
        screenTitle='Página A'
        buttonTitle='Clique para ir à tela B'
        onNavigation={handleClickNavigation}
      />
    </Container>
  );
};