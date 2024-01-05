import React, { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Sepet öğesi bileşeni
const CartItem = ({ item, onQuantityChange }) => {
  return (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{`₺${item.price}`}</Text>
      </View>
      <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => onQuantityChange(item.id, Math.max(item.quantity - 1, 0))} style={styles.quantityButtonLeft}>
            {item.quantity > 1 ? (<Icon name="minus" size={24} color="#000" />) : (<Icon name="trash-can-outline" size={24} color="#000" />)}
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => onQuantityChange(item.id, item.quantity + 1)} style={styles.quantityButtonRight}>
            <Icon name="plus" size={24} color="#000" />
          </TouchableOpacity>
        </View>
    </View>
  );
};

// Sepet ekranı bileşeni
const CartScreen = ({navigation}) => {
  const [cartItems, setCartItems] = useState([
    // Sahte veri
    { id: '1', name: 'Redoxon C Vitamini Efervesan Tablet', price: 249.99, quantity: 1, image: 'https://cdn.pixabay.com/photo/2014/04/03/09/57/bottles-309391_960_720.png' },
    { id: '2', name: 'Sambucol Plus Efervesan Tablet', price: 399.99, quantity: 2, image: 'https://cdn.pixabay.com/photo/2014/04/03/09/57/bottles-309391_960_720.png' },
    // Diğer ürünler
  ]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: 'center', // Başlığı ortala
      headerTitle: 'Sepetim', // Başlıkta gösterilecek metin
      headerStyle: {
        backgroundColor: '#fff', // Başlık arka plan rengi
      },
      headerTintColor: '#e53935', // Başlıkta bulunan buton ve başlık metni rengi
      headerTitleStyle: {
        fontWeight: 'bold', // Başlık metni kalınlığı
      },
      headerRight: () => (
        <TouchableOpacity onPress={() => { /* Çöp kutusu işlevi */ }} style={styles.trashButton}>
          <Icon name="delete" size={24} color="#e53935" />
        </TouchableOpacity>
      ),
      // Eğer başka başlık özellikleri eklemek isterseniz, burada ekleyebilirsiniz.
    });
  }, [navigation]);

  // Miktarı güncelleme işlevi
  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  // Toplam fiyatı hesaplama
  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.quantity * item.price), 0);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartItem item={item} onQuantityChange={handleQuantityChange} />}
        keyExtractor={item => item.id}
      />
      <View style={styles.footer}>
        <TouchableOpacity style={styles.checkoutButton} onPress={() => {/* Ödeme işlemine yönlendir */}}>
          <Text style={styles.checkoutButtonText}>Devam</Text>
        </TouchableOpacity>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>₺1.049,97</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemImage: {
    width: 64,
    height: 64,
    marginRight: 10,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: '#e53935',
  },
  quantityContainer: {
    backgroundColor: '#ff5555',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    borderRadius: 10,
  },
  quantityButtonLeft: {
    backgroundColor: '#ffcbdb',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 8,
  },
  quantityButtonRight: {
    backgroundColor: '#ffcbdb',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 8,
  },
  quantity: {
    fontSize: 16,
    padding: 8,
  },
  deleteButton: {
    marginLeft: 10,
    padding: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff', // Footer arka plan rengi beyaz
  },
  checkoutButton: {
    backgroundColor: '#e53935', // Butonun arka plan rengi kırmızı
    paddingHorizontal: 20,      // Yatay padding
    paddingVertical: 12,        // Dikey padding
    borderRadius: 20,           // Köşe yuvarlaklık değeri
    shadowColor: '#000',        // Gölge rengi
    shadowOffset: { width: 0, height: 2 }, // Gölge boyutu
    shadowOpacity: 0.1,        // Gölge opaklığı
    shadowRadius: 3.84,        // Gölge yarıçapı
    elevation: 5,              // Android için gölge efekti
  },
  checkoutButtonText: {
    color: '#fff',              // Buton metni rengi beyaz
    fontSize: 18,               // Buton metni boyutu
    fontWeight: 'bold',         // Buton metni kalınlığı
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2', // Toplam tutarın arka plan rengi
    borderRadius: 20,           // Köşe yuvarlaklık değeri
    paddingVertical: 12,        // Dikey padding
    paddingHorizontal: 20,      // Yatay padding
    shadowColor: '#000',        // Gölge rengi
    shadowOffset: { width: 0, height: 1 }, // Gölge boyutu
    shadowOpacity: 0.1,        // Gölge opaklığı
    shadowRadius: 2,           // Gölge yarıçapı
    elevation: 3,              // Android için gölge efekti
  },
  totalText: {
    fontSize: 18,               // Toplam tutar metni boyutu
    color: '#e53935',           // Toplam tutar metni rengi
    fontWeight: 'bold',         // Toplam tutar metni kalınlığı
  },
  // Diğer stiller buraya eklenebilir
});

export default CartScreen;
