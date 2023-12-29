import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // İkon paketini yükleyin

const ProductCard = ({ product }) => {
  const [count, setCount] = useState(0);
  const heightAnim = useRef(new Animated.Value(0)).current; // Kutunun yükseklik animasyonu

  useEffect(() => {
    console.log(count)
    if (count === 0) {
        Animated.timing(heightAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false
          }).start();
        
      } else {
        Animated.timing(heightAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: false // Bu değer, kullanılan RN sürümüne göre değişebilir
          }).start();
      }
  }, [count])

  const toggleCounterPlus = () => {
    setCount(c => c+1)
  };

  const toggleCounterMinus = () => {
    setCount(c => c-1)
  };



  const heightStyle = {
    height: heightAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 80] // Animasyonlu kutunun maksimum yüksekliği
    })
  };

  return (
    <>
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.name}>{product.name}</Text>
      </View>
    </View>
    <View style={styles.counterContainer}>
    <TouchableOpacity onPress={toggleCounterPlus} style={styles.button}>
      <Icon name="add" size={20} color="#e53935" />
    </TouchableOpacity>
    <Animated.View style={[styles.counter, heightStyle]}>
      {count > 0 && (
        <>
          <View style={styles.button}>
            <Text style={styles.count}>{count}</Text>
          </View>
          
          <TouchableOpacity onPress={toggleCounterMinus} style={styles.button}>
            <Icon name="remove" size={20} color="#e53935" />
          </TouchableOpacity>
          
        </>
      )}
    </Animated.View>
  </View>
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
    margin: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 70,
    resizeMode: 'contain',
  },
  infoContainer: {
    padding: 10,
  },
  name: {
    fontSize: 14,
    color: '#333',
  },
  price: {
    fontSize: 16,
    color: '#e53935',
    fontWeight: 'bold',
    marginVertical: 4,
  },
  counterContainer: {
    position: 'absolute',
    right: 2,
    top: 2,
    alignItems: 'center',
    justifyContent: 'center',

  },
  counter: {
    backgroundColor: 'transparent',
  },
  changeButton: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 1,
  },
  count: {
    fontSize: 16,
    color: '#e53935',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#F8E8EE',
    borderRadius: 10,
    padding: 5,
    marginHorizontal: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default ProductCard;
