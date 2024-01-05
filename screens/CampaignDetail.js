import React, { useLayoutEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Image, Text, useWindowDimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HTMLRender from "react-native-render-html";

const CampaignDetail = ({ navigation }) => {
  // useLayoutEffect ile başlığı ayarlayın
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: 'center', // Başlığı ortala
      headerTitle: 'Detay', // Başlıkta gösterilecek metin
      headerStyle: {
        backgroundColor: '#fff', // Başlık arka plan rengi
      },
      headerTintColor: '#e53935', // Başlıkta bulunan buton ve başlık metni rengi
      headerTitleStyle: {
        fontWeight: 'bold', // Başlık metni kalınlığı
      },
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Icon name="close" size={24} color="#000" />
        </TouchableOpacity>
    ),
    });
  }, [navigation]);

  const { width } = useWindowDimensions();

  // HTML içeriği burada belirleyin
  const htmlContent = `
    
    <p>Kampanya Koşulları:</p>
    <ul>
      <li>Bu kampanya sizin tarafınızdan sadece 1 kez kullanılabilir.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum erat vel lacus finibus, sed pretium dolor pharetra. Suspendisse potenti. Proin tellus massa, rutrum id nisi in, pretium elementum erat. Vestibulum in odio malesuada, semper lorem et, tristique ex. Nam finibus, dui at posuere vulputate, urna diam fermentum tellus, a condimentum massa nunc non turpis. Cras non consequat diam. Nam viverra tristique ex, eget facilisis augue fringilla laoreet. Aenean ornare purus risus, sagittis imperdiet metus aliquet in. Quisque ac tortor nibh. Nullam velit diam, sollicitudin ut turpis sed, dapibus fermentum sem.

      Nulla facilisi. Suspendisse potenti. Curabitur ac massa eu diam fermentum euismod. Proin tristique aliquam massa in luctus. Integer lacus nulla, gravida a molestie nec, mollis non eros. Sed mollis feugiat erat, eget tempor magna finibus vitae. Donec vel sapien sed massa ornare vestibulum at in justo. Etiam iaculis, enim eu interdum aliquet, nunc lectus pulvinar ligula, sit amet pellentesque odio lorem eget erat. Morbi vitae nulla non turpis venenatis egestas. Vestibulum a facilisis urna. Cras eu porta ex, in tristique eros.
      
      Curabitur massa metus, scelerisque sit amet sem ut, ultrices hendrerit mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum justo, tincidunt sed velit id, facilisis vulputate enim. Phasellus venenatis, metus in molestie laoreet, purus dui posuere lacus, id fringilla urna turpis sit amet dui. Nunc quis scelerisque ligula, id gravida urna. Fusce nec accumsan sem. Morbi semper finibus sapien, eu ornare purus hendrerit vel.
      
      Cras tincidunt ex sit amet vulputate lacinia. Aenean ullamcorper efficitur mattis. Nam tortor lacus, pretium ac nisl at, tristique venenatis nunc. Morbi facilisis turpis vitae orci aliquet, ut consectetur purus varius. Fusce posuere suscipit erat, id bibendum ipsum ullamcorper at. Aenean suscipit posuere tellus, id euismod nibh convallis eget. Integer felis mauris, luctus vel ullamcorper non, posuere at arcu. Aliquam vehicula nisi non nisi rutrum ultricies.
      
      Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc hendrerit elementum leo non dictum. Praesent ullamcorper, justo sit amet ultricies ornare, mauris mauris auctor tellus, quis egestas ipsum tellus eget est. Integer accumsan urna turpis, ac consequat lorem pretium id. Sed scelerisque pretium dolor vitae lacinia. Curabitur vitae est dictum, gravida turpis ac, elementum tortor. Praesent congue, odio id pretium iaculis, metus turpis vulputate purus, a laoreet enim turpis a justo. Integer molestie cursus sem vitae laoreet.</li>
      <!-- Diğer liste öğeleri -->
    </ul>
    <p>Nasıl Kullanabilirsiniz?</p>
    
  `;

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: 'https://img.freepik.com/free-vector/modern-sale-banner-with-text-space-area_1017-27331.jpg' }} // Resmin URL'sini buraya girin
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.mainTitle}>İlk siparişe özel getirme ücreti yok!</Text>
        <Text style={styles.subtitle}>İlk Siparişinizde Getirme Ücreti Yok 🚴</Text>
        <HTMLRender source={{ html: htmlContent }} contentWidth={width} />   
      </View>
       
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200, // İstenilen yükseklik değerine göre ayarlayın
  },
  textContainer: {
    padding: 16,
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginTop: 8,
  },
  // Diğer stiller...
});

export default CampaignDetail;
