import { createStackNavigator } from 'react-navigation';
import SignIn from './SignIn';
import SignOut from './SignOut';

const navigation = createStackNavigator({
  SignIn,
  SignOut,
});

export default navigation;
