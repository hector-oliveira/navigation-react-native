import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background: ${({theme}) => theme.colors.primary_900} ;
  border-radius: 4px;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 16px 0;
  margin-top: 8px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${({theme}) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.regular};
`;