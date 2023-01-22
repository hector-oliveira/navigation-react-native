import React from 'react';
import { TouchableOpacityProps } from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  title: string | any;
}

import {
  Container,
  Title
} from './styles';

export const Button= ({ title, ...rest}:ButtonProps ) => {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};