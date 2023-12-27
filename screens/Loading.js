// screens/LoadingScreen.js
import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { checkFirstLaunch } from '../utils';

const Loading = ({navigation}) => {
  useEffect(() => {
    checkFirstLaunch().then(isFirst => {
      if(isFirst){
        navigation.replace("Onboarding")
      }else{
        navigation.replace("Login")
      }
    });
  }, []);
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" />
            <Text>Uygulama yükleniyor...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;
