import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from './screens/Cart';
import Home from './screens/Home';
import Account from './screens/Account';
import Search from './screens/Search';
import Login from './screens/Login';
import { Onboarding1, Onboarding2, Onboarding3 } from './screens/Onboarding';

const OnboardingStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Account" component={Account} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
}

export const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
}

export const AppStackNavigator = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Main" component={BottomTabNavigator} />
      <AppStack.Screen name="Cart" component={Cart} />
    </AppStack.Navigator>
  );
}

export const OnboardingNavigator = () => {
  return (
    <OnboardingStack.Navigator>
      <OnboardingStack.Screen name="Onboarding1" component={Onboarding1} />
      <OnboardingStack.Screen name="Onboarding2" component={Onboarding2} />
      <OnboardingStack.Screen name="Onboarding3" component={Onboarding3} />
    </OnboardingStack.Navigator>
  );
}
