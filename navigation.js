import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Cart from './screens/Cart';
import Home from './screens/Home';
import Account from './screens/Account';
import Search from './screens/Search';
import Login from './screens/Login';
import Onboarding from './screens/Onboarding';
import Loading from './screens/Loading';
import Campaign from './screens/Campaign';

const AuthStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Campaigns') {
            iconName = focused ? 'megaphone' : 'megaphone-outline';
          } else if (route.name === 'Account') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Campaigns" component={Campaign} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}

export const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Loading" component={Loading} />
      <AuthStack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
      <AuthStack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
    </AuthStack.Navigator>
  );
}

export const AppStackNavigator = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Main" component={BottomTabNavigator} options={{ headerShown: false }} />
      <AppStack.Screen name="Cart" component={Cart} />
    </AppStack.Navigator>
  );
}
