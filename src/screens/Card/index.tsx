import { ScreenComponents } from '@components/ScreenComponents';
import { useNavigation } from '@react-navigation/core';
import React from 'react';

import {
  Container
} from './styles';

export const Card = () => {
  const navigation = useNavigation();

  const handleClickNavigation = () => {
    // navegação para a tela A
    navigation.navigate('screenA');
  }
  
  return (
    <Container>
      <ScreenComponents 
        screenTitle='Página Card'
        buttonTitle='Clique no botão, tio!!!'
        onNavigation={handleClickNavigation}
        styleButton={{ backgroundColor: '#F7FF9E', color: '#6210A3' }}
      />
    </Container>
  );
};