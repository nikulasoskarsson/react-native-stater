import { createStackNavigator } from 'react-navigation';
import Home from './Home';

const navigation = createStackNavigator(
  {
    Home,
  },
  {
    initialRouteName: SignIn,
  }
);

navigation;
