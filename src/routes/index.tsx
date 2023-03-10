import { NavigationContainer } from '@react-navigation/native'

import { StackRoutes } from '@routes/stack.routes';

export const Routes = () => {
  return(
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}