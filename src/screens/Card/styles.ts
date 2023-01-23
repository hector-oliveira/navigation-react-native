import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.COLORS.primary_800};
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #000;
`;