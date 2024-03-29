import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screen/Home';
import { Register } from '../screen/Register';
import { Details } from '../screen/Details';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="new" component={Register} />
      <Screen name="details" component={Details} />
    </Navigator>
  )
}