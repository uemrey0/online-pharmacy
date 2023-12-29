import React, { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, FlatList, Image, TouchableOpacity, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SearchBar } from 'react-native-elements';
import ProductCard from '../components/ProductCart';

const Search = ({navigation}) => {
  const [search, setSearch] = useState('');

  // Popüler aramalar ve ürünler için sahte veri
  const popularSearches = ['Mustela', 'Solgar', 'Folik Asit', 'La Roche Posay', 'Vitamin', 'Gebelik Testi', 'Pastil', 'Anne & Bebek'];
  const popularProducts = [
    { id: '1', name: 'Ürün 1', price: '199,90 TL', count: 1, image: 'https://cdn.pixabay.com/photo/2014/04/03/09/57/bottles-309391_960_720.png' },
    { id: '2', name: 'Ürün 1', price: '199,90 TL', count: 1, image: 'https://cdn.pixabay.com/photo/2014/04/03/09/57/bottles-309391_960_720.png' },
    { id: '3', name: 'Ürün 1', price: '199,90 TL', count: 1, image: 'https://cdn.pixabay.com/photo/2014/04/03/09/57/bottles-309391_960_720.png' },
    { id: '4', name: 'Ürün 1', price: '199,90 TL', count: 1, image: 'https://cdn.pixabay.com/photo/2014/04/03/09/57/bottles-309391_960_720.png' },
    { id: '5', name: 'Ürün 1', price: '199,90 TL', count: 1, image: 'https://cdn.pixabay.com/photo/2014/04/03/09/57/bottles-309391_960_720.png' },
    // Diğer ürünler...
  ];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Arama', // Başlıkta gösterilecek metin
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

  // Popüler aramaları render edecek fonksiyon
  const renderSearchItem = (item) => (
    <TouchableOpacity style={styles.tag}>
      <Text style={styles.tagText}>{item}</Text>
    </TouchableOpacity>
  );

  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <View style={styles.container}>
      <SearchBar
        platform={Platform.OS == "android" ? 'android' : 'ios'}
        placeholder="Ara..."
        onChangeText={(value) => setSearch(value)}
        value={search}
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchBarInputContainer}
        inputStyle={styles.searchBarInput}
        searchIcon={() => <Icon name="search" size={24} color={'#e53935'}/>}
        lightTheme
        round
      />
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popüler Aramalar</Text>
          <FlatList
            data={popularSearches}
            renderItem={({ item }) => renderSearchItem(item)}
            horizontal
            keyExtractor={(item) => item}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popüler Ürünler</Text>
          <FlatList
            data={popularProducts}
            renderItem={({ item }) => <ProductCard product={item} />}
            ItemSeparatorComponent={renderSeparator}
            contentContainerStyle={styles.listContentContainer}
            horizontal
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBarContainer: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  searchBarInputContainer: {
    backgroundColor: '#EFEFEF',
  },
  searchBarInput: {
    backgroundColor: '#EFEFEF',
  },
  section: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  tag: {
    backgroundColor: '#ddd',
    borderRadius: 20,
    padding: 8,
    marginLeft: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagText: {
    fontSize: 14,
  },
  listContentContainer: {
    padding: 10, // Ya da istediğiniz başka bir değer
  },
  separator: {
    height: 10, // Öğeler arası boşluk
  },
  // Diğer stiller...
});

export default Search;
