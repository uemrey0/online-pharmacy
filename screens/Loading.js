import React, { useEffect } from 'react';
import { View, ActivityIndicator, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { checkFirstLaunch } from '../utils';

const { width } = Dimensions.get('window');

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
      <Image
        source={{uri: "https://www.aeo.org.tr/Helpers/DuyuruIcon.ashx?yayinyeri=sayfaicerik&Id=36690"}} // Burada kendi logonuzu ekleyin
        style={styles.logo}
        resizeMode="contain"
      />
      <ActivityIndicator size="large" color="#e53935" /> {/* Renk ve boyut özelleştirilebilir */}
      <Text style={styles.text}>Uygulama yükleniyor...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Arka plan rengini değiştirebilirsiniz
  },
  logo: {
    width: width * 0.5, // Logonun ekran genişliğine oranla boyutu
    height: width * 0.5, // Logonun ekran genişliğine oranla yüksekliği
    marginBottom: 30,
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    color: '#666', // Metin rengini değiştirebilirsiniz
  },
});

export default Loading;
