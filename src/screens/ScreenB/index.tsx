import { ScreenComponents } from '@components/ScreenComponents';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import {
  Container,
} from './styles';


export const ScreenB = () => {
  const navigation = useNavigation();
  
  const handleClickNavigation = () => {
    // navegação para a tela card
    navigation.navigate('card');
  }

  return (
    <Container>
      <ScreenComponents 
        screenTitle='Página B'
        buttonTitle='Clique no botão, tio!!!'
        onNavigation={handleClickNavigation}
        styleButton={{ backgroundColor: '#DE5A0D' }}
      />
    </Container>
  );
};