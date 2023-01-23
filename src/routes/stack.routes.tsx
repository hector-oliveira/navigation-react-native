import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

// importando as telas
import * as screen from '@screens/index';


export const StackRoutes = () => {
  return(
    <Navigator screenOptions={{ headerShown: false }}>

      <Screen name="screenA" component={screen.ScreenA} />
      <Screen name="screenB" component={screen.ScreenB} />
      <Screen name="card" component={screen.Card} />
    
    </Navigator>  
  );
};