import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { checkFirstLaunch } from './utils';
import Loading from './screens/Loading';
import { AppStackNavigator, AuthStackNavigator, OnboardingNavigator } from './navigation';

const App = () => {
  const isLoggedIn = true;
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);

  useEffect(() => {
    checkFirstLaunch().then(isFirst => {
      setIsFirstLaunch(isFirst);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {isFirstLaunch ? <OnboardingNavigator /> : (isLoggedIn ? <AppStackNavigator /> : <AuthStackNavigator />)}
    </NavigationContainer>
  );
};

export default App;
