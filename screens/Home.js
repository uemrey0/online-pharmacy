import React, { useState, useRef, useLayoutEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SliderBox } from "react-native-image-slider-box";
import { EvilIcons, FontAwesome5, Feather } from '@expo/vector-icons';

// Örnek veri yapınız
const categories = [
  { id: '1', title: 'Ağrı Kesiciler', image: 'https://i.pinimg.com/originals/c2/7b/00/c27b000caa459c06ac40affba4a8881a.png' },
  { id: '2', title: 'Soğuk Algınlığı', image: 'https://i.pinimg.com/originals/c2/7b/00/c27b000caa459c06ac40affba4a8881a.png' },
  // Diğer kategoriler...
];

const pharmacies = [
  { id: '1', name: 'Deniz', rating: '4.5', distance: '0.3', min: '10', image: 'https://t4.ftcdn.net/jpg/02/48/46/79/360_F_248467931_KxsM1VrqZLxf8Z7IuQLsaZu1YUEWpAF0.jpg' },
  { id: '2', name: 'Yağmur', rating: '4.0', distance: '0.3', min: '10', image: 'https://t4.ftcdn.net/jpg/02/48/46/79/360_F_248467931_KxsM1VrqZLxf8Z7IuQLsaZu1YUEWpAF0.jpg' },
  // Diğer eczaneler...
];

const sliderImages = [
  'https://static.vecteezy.com/system/resources/thumbnails/015/093/720/small/cartoon-render-3d-shiny-white-10-percent-off-discount-sale-tag-symbol-design-element-on-red-background-vector.jpg',
  'https://img.freepik.com/free-vector/modern-sale-banner-with-text-space-area_1017-27331.jpg',
  // Diğer slaytlar...
];

const Home = ({navigation}) => {
    // Slider için geçerli görüntüyü tutan state
    const [currentSlide, setCurrentSlide] = useState(0);

    useLayoutEffect(() => {
        navigation.setOptions({
          headerTitleAlign: 'center', // Başlığı ortala
          headerTitle: 'Benim Eczanem', // Başlıkta gösterilecek metin
          headerStyle: {
            backgroundColor: '#e53935', // Başlık arka plan rengi
          },
          headerTintColor: '#fff', // Başlıkta bulunan buton ve başlık metni rengi
          headerTitleStyle: {
            fontWeight: 'bold', // Başlık metni kalınlığı
          },
          // Eğer başka başlık özellikleri eklemek isterseniz, burada ekleyebilirsiniz.
        });
      }, [navigation]);
  
    // Slider görsellerini render edecek fonksiyon
    const renderSliderItem = ({ item }) => (
      <Image style={styles.slideImage} source={{ uri: item }} />
    );
  
    // Kategori öğelerini render edecek fonksiyon
    const renderCategoryItem = ({ item }) => (
      <View style={styles.categoryItem}>
        <Image style={styles.categoryImage} source={{ uri: item.image }} />
        <Text style={styles.categoryTitle}>{item.title}</Text>
      </View>
    );
  
    // Eczane öğelerini render edecek fonksiyon
    const renderPharmacyItem = ({ item }) => (
      <TouchableOpacity style={styles.pharmacyItem}>
        <Image style={styles.pharmacyImage} source={{ uri: item.image }} />
        <View style={styles.pharmacyInfo}>
          <Text style={styles.pharmacyName}>{item.name}</Text>
          <Text style={styles.pharmacyDistance}><EvilIcons name="location" /> {item.distance} km</Text>
          <Text style={styles.pharmacyDistance}><FontAwesome5 name="shipping-fast"/> {item.min} dk</Text>
        </View>
      </TouchableOpacity>
    );

    const onAddressBarPress = () => {
      // Burada adres seçim ekranına yönlendirme yapabilirsiniz
    };
  
    return (
      <>
        <View style={styles.addressBar}>
          <TouchableOpacity onPress={onAddressBarPress} style={styles.addressBarButton} activeOpacity={.95}>
            <Feather name="home" size={24} color="black" />
            <View style={styles.verticleLine}></View>
            <Text numberOfLines={1} style={styles.addressBarText}>
              Yıldız, Eski Konak Sk. 15 ...
            </Text>
          </TouchableOpacity>
          <View style={styles.tvzBar}>
            <Text style={styles.tvzText}>TVZ</Text>
            <Text style={styles.tvzText}>10-15 dk</Text>
          </View>
        </View>
        <ScrollView style={styles.container}>
    
          {/* Slider */}
          <SliderBox 
              images={sliderImages}
              sliderBoxHeight={200}
              onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
              dotColor="#FFEE58"
              inactiveDotColor="#90A4AE"
              paginationBoxVerticalPadding={20}
              autoplay
              circleLoop
              resizeMethod={'resize'}
              resizeMode={'cover'}
              paginationBoxStyle={{
                  position: "absolute",
                  bottom: 0,
                  padding: 0,
                  alignItems: "center",
                  alignSelf: "center",
                  justifyContent: "center",
                  paddingVertical: 10
              }}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 0,
                  padding: 0,
                  margin: 0,
                  backgroundColor: "rgba(128, 128, 128, 0.92)"
              }}
              ImageComponentStyle={{borderRadius: 25, width: '95%', marginTop: 5}}
              imageLoadingColor="#2196F3"
          />
    
          {/* Kategori Listesi */}
          <View style={styles.listHeader}>
              <Text style={styles.listTitle}>Kategoriler</Text>
              <TouchableOpacity onPress={() => {}} style={styles.showAllButton}>
              <Text style={styles.showAllText}>Tümünü gör ></Text>
              </TouchableOpacity>
          </View>
          <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesList}
          />

          
    
          {/* Eczaneler Listesi */}
          <View style={styles.listHeader}>
              <Text style={styles.listTitle}>Yakındaki Eczaneler</Text>
              <TouchableOpacity onPress={() => {}} style={styles.showAllButton}>
              <Text style={styles.showAllText}>Tümünü gör ></Text>
              </TouchableOpacity>
          </View>
          <FlatList
            data={pharmacies}
            renderItem={renderPharmacyItem}
            showsVerticalScrollIndicator={false}
            style={styles.pharmaciesList}
          />
        </ScrollView>
      </>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#6200EE',
    },
    menuButton: {
      // Menü butonu stilleri
    },
    headerTitle: {
      color: '#FFFFFF',
      fontSize: 20,
    },
    searchButton: {
      // Arama butonu stilleri
    },
    slideImage: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
    },
    categoriesList: {
      marginTop: 20,
      margin: 10
    },
    categoryItem: {
      marginHorizontal: 3,
      alignItems: 'center',
      backgroundColor: "#fff",
      padding: 8,
      borderRadius: 10,
    },
    categoryImage: {
      width: 60,
      height: 60,
      resizeMode: 'cover',
    },
    categoryTitle: {
      marginTop: 5,
      fontSize: 12
    },
    pharmaciesList: {
      marginTop: 20,
      margin:2,
    },
    pharmacyItem: {
      flexDirection: 'row',
      padding: 10,
      alignItems: 'center',
      backgroundColor: "#fff",
      marginVertical: 3,
      marginHorizontal: 8,
      borderRadius: 10,
    },
    pharmacyImage: {
      width: 50,
      height: 50,
      resizeMode: 'cover',
      borderRadius: 10,
    },
    pharmacyInfo: {
      marginLeft: 10,
    },
    pharmacyName: {
      fontWeight: 'bold',
    },
    pharmacyDistance: {
      color: 'gray',
    },
    listHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10,
      marginTop: 20,
    },
    listTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    listSubtitle: {
      fontSize: 16,
      color: 'gray',
    },
    showAllText: {
    fontSize: 12,
    color: '#e53935',
    },
    addressBar: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FF6666',
      shadowColor: '#000', // Gölgelendirme
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    addressBarButton: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: "white",
      padding: 10, 
      borderTopRightRadius: 50,
      borderBottomRightRadius: 50,
    },
    addressBarText: {
      fontSize: 16,
      color: 'black',
      marginLeft: 10,
    },
    
    tvzBar: {
      paddingHorizontal: 10,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    tvzText: {
      fontSize: 14,
      color: 'white',
    },
    // Diğer stiller...
  });  

export default Home;
