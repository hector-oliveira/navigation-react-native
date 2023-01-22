import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

// importando as telas
import { 
  ScreenA,
  ScreenB
} from '@screens/index'


export const StackRoutes = () => {
  return(
    <Navigator>
      <Screen name="ScreenA" component={ScreenA} />
      <Screen name="ScreenB" component={ScreenB} />
    </Navigator>  
  )
};