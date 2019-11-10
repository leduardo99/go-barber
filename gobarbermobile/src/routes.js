import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

const AuthNavigator = createSwitchNavigator({
  SignIn,
  SignUp,
});

const Routes = createAppContainer(AuthNavigator);

export default Routes;
