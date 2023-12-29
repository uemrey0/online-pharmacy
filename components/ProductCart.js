// ProductCard.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // İkon paketini yükleyin

const ProductCard = ({ product }) => {
  // Ürün kartına tıklandığında gerçekleşecek işlem
  const onAddToCart = () => {
    // Burada sepete ekleme işlemi yapabilirsiniz
  };

  return (
    <>
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.count}>{product.count} adet</Text>
        
      </View>
      
    </View>
    <TouchableOpacity onPress={onAddToCart} style={styles.addButton}>
    <Icon name="add" size={20} color="#e53935" />
  </TouchableOpacity>
  </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: "lightgrey",
    borderWidth: 1,
    padding: 10,
    margin: 10, // Bu, kart aralarında boşluk sağlar.
    overflow: 'hidden', // Bu, borderRadius etrafındaki gölgelerin ve kenarların düzgün görünmesini sağlar.
    // Gölge stilleri
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150, // Görselin yüksekliği
    resizeMode: 'contain',
  },
  infoContainer: {
    padding: 10, // İçerideki öğeler arasında boşluk sağlar.
  },
  name: {
    fontSize: 14,
    color: '#333',
  },
  count: {
    fontSize: 12,
    color: 'grey',
    marginVertical: 4,
  },
  price: {
    fontSize: 16,
    color: '#FB8C00',
    fontWeight: 'bold',
    marginVertical: 4,
  },
  addButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: '#F8E8EE',
    borderRadius: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Diğer stiller...
});

export default ProductCard;
