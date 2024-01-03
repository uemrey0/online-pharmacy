import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Account = ({ navigation }) => {
  const menuItems = [
    { title: 'Kişisel Bilgilerim', screen: 'PersonalInfo' },
    { title: 'Geçmiş Siparişlerim', screen: 'OrderHistory' },
    { title: 'Favori Eczanelerim', screen: 'FavoritePharmacies' },
    { title: 'Adreslerim', screen: 'MyAddresses' },
    { title: 'Kayıtlı Kartlarım', screen: 'SavedCards' },
    { title: 'İletişim', screen: 'Contact' },
    { title: 'Çıkış Yap', screen: 'Logout' },
  ];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: 'center', // Başlığı ortala
      headerTitle: 'Hesabım', // Başlıkta gösterilecek metin
      headerStyle: {
        backgroundColor: '#fff', // Başlık arka plan rengi
      },
      headerTintColor: '#e53935', // Başlıkta bulunan buton ve başlık metni rengi
      headerTitleStyle: {
        fontWeight: 'bold', // Başlık metni kalınlığı
      },
      // Eğer başka başlık özellikleri eklemek isterseniz, burada ekleyebilirsiniz.
    });
  }, [navigation]);

  const onItemPress = (screen) => {
    // Eğer Çıkış Yap ise farklı bir işlem yapabilirsiniz
    if (screen === 'Logout') {
      // Logout işlemi
    } else {
      // Diğer ekranlara yönlendirme
      navigation.navigate(screen);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => onItemPress(item.screen)}>
      <Text style={styles.title}>{item.title}</Text>
      <Icon name="chevron-right" size={24} color="#ccc" />
    </TouchableOpacity>
  );

  return (
    <ScrollView>
    <FlatList
      data={menuItems}
      renderItem={renderItem}
      keyExtractor={(item) => item.title}
      style={styles.container}
    />
    <View style={[styles.item, {marginTop: 15}]}>
      <Text style={styles.title}>Version</Text>
      <Text style={styles.subtitle}>v0.1</Text>
    </View>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ededed',
    flexDirection: 'row', // Menü öğelerini yatay olarak düzenle
    justifyContent: 'space-between', // Başlık ve ikon arasında boşluk bırak
    alignItems: 'center', // İkon ve metni dikey olarak ortala
  },
  title: {
    fontSize: 16,
  },
  subtitle: {
    fontSize: 16,
    color: "#ccc"
  }
});

export default Account;
