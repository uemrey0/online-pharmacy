import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Cart from './screens/Cart';
import Home from './screens/Home';
import Account from './screens/Account';
import Search from './screens/Search';
import Login from './screens/Login';
import Onboarding from './screens/Onboarding';
import Loading from './screens/Loading';
import Campaigns from './screens/Campaigns';
import Announcements from './screens/Announcements';
import CampaignDetail from './screens/CampaignDetail';
import AddressSelect from './screens/AddressSelect';
import AddressEdit from './screens/AddressEdit';

const AuthStack = createStackNavigator();
const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <TopTab.Navigator
      initialRouteName="Campaigns"
      screenOptions={{
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#F8F8F8',
        tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
        tabBarStyle: { backgroundColor: '#FF5555' },
        tabBarIndicatorStyle: { backgroundColor: '#FFFFFF', height: 4 },
        tabBarPressColor: '#FFFFFF',
      }}
    >
      <TopTab.Screen
        name="Campaigns"
        component={Campaigns}
        options={{ tabBarLabel: 'Kampanyalar' }}
      />
      <TopTab.Screen
        name="Announcements"
        component={Announcements}
        options={{ tabBarLabel: 'Duyurular' }}
      />
    </TopTab.Navigator>
  );
};

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
          } else if (route.name === 'CampaignsNavigator') {
            iconName = focused ? 'megaphone' : 'megaphone-outline';
          } else if (route.name === 'Account') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#FF5555'
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="CampaignsNavigator" component={TopTabNavigator} options={{
        headerTitleAlign: 'center',
        headerTitle: 'Kampanyalar',
        headerStyle: {
          backgroundColor: '#e53935',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} />
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
      <AppStack.Screen 
        name="CampaignDetail" 
        component={CampaignDetail}
        options={{
          headerShown: true,
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS, // Bu iOS tarzı modal animasyon sağlar
          gestureEnabled: true, // iOS'ta aşağı kaydırarak kapatmayı etkinleştirir
          gestureDirection: 'vertical', // Dikey hareketi tanımlar
        }}
      />
      <AppStack.Screen name="AddressSelect" component={AddressSelect} />
      <AppStack.Screen name="AddressEdit" component={AddressEdit} />
    </AppStack.Navigator>
  );
}
