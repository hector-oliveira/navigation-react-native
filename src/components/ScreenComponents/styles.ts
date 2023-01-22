import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-family: ${({ theme }) => theme.FONTS.bold};
  color: ${({ theme }) => theme.COLORS.shape};
`;

export const ContainerButton = styled.View`
  width: 80%;
`;