import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const handleEDevletLogin = () => {
    // e-Devlet giriş işlemi burada gerçekleştirilecek
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://www.aeo.org.tr/Helpers/DuyuruIcon.ashx?yayinyeri=sayfaicerik&Id=36690' }} // Logo görselinizin linkini ekleyin
        style={styles.logo}
      />
      <Text style={styles.title}>Benim Eczanem</Text>
      <Text style={styles.subtitle}>Önce Sağlık</Text>
      <TouchableOpacity style={styles.loginButton} onPress={handleEDevletLogin}>
        <Text style={styles.loginButtonText}>e-Devlet Giriş</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', // Arka plan rengi
  },
  logo: {
    width: 120, // Logo genişliği
    height: 120, // Logo yüksekliği
    resizeMode: 'contain', // Resmin orantılı olarak sığdırılması
    marginBottom: 30, // Logonun altındaki boşluk
  },
  title: {
    fontSize: 24, // Başlık font boyutu
    fontWeight: 'bold', // Yazı tipi kalınlığı
    marginBottom: 10, // Başlık altındaki boşluk
  },
  subtitle: {
    fontSize: 18, // Alt başlık font boyutu
    color: '#666', // Alt başlık metni rengi
    marginBottom: 30, // Alt başlık altındaki boşluk
  },
  loginButton: {
    backgroundColor: '#e53935', // Buton arka plan rengi
    paddingVertical: 12, // Dikey padding
    paddingHorizontal: 30, // Yatay padding
    borderRadius: 25, // Buton kenar yuvarlaklığı
    shadowColor: '#000', // Gölgelendirme
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  loginButtonText: {
    color: '#fff', // Buton metni rengi
    fontSize: 16, // Buton metni font boyutu
    fontWeight: 'bold', // Yazı tipi kalınlığı
  },
});

export default LoginScreen;
