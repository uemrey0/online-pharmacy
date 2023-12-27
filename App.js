import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { checkFirstLaunch } from './utils';
import Loading from './screens/Loading';
import { AppStackNavigator, AuthStackNavigator, OnboardingNavigator } from './navigation';

const App = () => {
  const isLoggedIn = false;

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default App;
