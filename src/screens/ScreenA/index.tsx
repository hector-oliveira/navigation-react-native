import { ScreenComponents } from '@components/ScreenComponents';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

// importação dos estilos da tela
import {
  Container
} from './styles';

export const ScreenA = () => {
  
  const navigation = useNavigation();
  
  const handleClickNavigation = () => {
    // navegação para a tela B
    navigation.navigate('screenB');
  };

  return (
    <Container>
      <ScreenComponents 
        screenTitle='Página A'
        buttonTitle='Clique para ir à tela B'
        onNavigation={handleClickNavigation}
        styleButton={{ backgroundColor: '#E2F75C', color: '#711DAB' }}
      />
    </Container>
  );
};