import React, { useEffect, useRef, useState } from 'react';
import { Animated, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

// Onboarding içerikleri bir array olarak tanımlayın
const onboardingData = [
  {
    image: 'https://cdn.discordapp.com/attachments/1028246507197055066/1174393570199879760/depositphotos_637795970-stock-illustration-local-search-listing-concept-map.webp?ex=659592be&is=65831dbe&hm=88a4194da006a6e07c412bfa840817a2c26c375a8463ffa76a7b9d01774be62b&',
    title: 'Sana yakın eczaneleri bul',
    description: 'Konumunuza en yakın ecaneleri sadece tek bir adımda görüntüleyebilirsiniz.'
  },
  {
    image: 'https://cdn.discordapp.com/attachments/1028246507197055066/1174391854473674872/7dc6198bafe8f0d9768ed209d90b8f07.jpg?ex=65959125&is=65831c25&hm=fa55da157dcbf38226eda1592d97a54291920711ad7218794e418150cbc88c4c&',
    title: 'En güncel ilaçları gör',
    description: 'Sizin için en güncel ilaçları ve detaylarını kolayca keşfedin.'
  },
  {
    image: 'https://cdn.discordapp.com/attachments/1028246507197055066/1174393123443589191/ori_3886971_hd6wuxdqi3rlb4u36kr5upr3bmbzwc9pltxo3oby_drug-delivery-service-of-pharmacy-store-vector.jpg?ex=65959253&is=65831d53&hm=410192e3a4116f12e82ed774a64d307dec6dea01b20478510c2101eee9d2f871&',
    title: 'Kapına teslimat al',
    description: 'İster kapına gelsin, istersen biz sizin için hazırlayalım eczaneden teslim alın.'
  },
  // Diğer onboarding adımlarınız ...
];

const Onboarding = ({navigation}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current; // Başlangıç opaklık değeri

  useEffect(() => {
    // Her adım değişikliğinde opaklık animasyonunu tetikle
    Animated.timing(fadeAnim, {
      toValue: 1, // Hedef opaklık değeri
      duration: 500, // Animasyon süresi
      useNativeDriver: true, // Performans için native driver kullan
    }).start();
  }, [currentStep, fadeAnim]);

  const nextStep = () => {
    if (currentStep < onboardingData.length - 1) {
      fadeAnim.setValue(0); // Opaklık değerini sıfırla
      setCurrentStep(currentStep + 1);
    } else {
      navigation.replace('Login');
    }
  };

  const skipToLastStep = () => {
    navigation.replace('Login');
  };

  const renderPagination = () => {
    return (
      <View style={styles.paginationWrapper}>
        {onboardingData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              { backgroundColor: currentStep === index ? '#5cb85c' : '#c5c5c5' },
            ]}
          />
        ))}
      </View>
    );
  };

  // Geçerli adımdaki içeriği alın
  const { image, title, description } = onboardingData[currentStep];

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <Image source={{ uri: image }} style={styles.image} onError={(error) => console.log('Görsel yüklenirken bir hata oluştu', error)} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        {renderPagination()}
      </Animated.View>
      
      <TouchableOpacity style={styles.button} onPress={nextStep}>
        <Text style={styles.buttonText}>
          {currentStep === onboardingData.length - 1 ? 'Hadi Başlayalım' : 'Devam'}
        </Text>
      </TouchableOpacity>
      {currentStep < onboardingData.length - 1 && (
        <TouchableOpacity onPress={skipToLastStep}>
          <Text style={styles.skipText}>Atla</Text>
        </TouchableOpacity>
      )}
    </View>

    
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around', // İçerikleri ekrana yaymak için
      padding: 20,
      backgroundColor: '#fff', // Arka plan beyaz
    },
    image: {
        width: 300, // Resmin genişliğini sabit bir değer yapın
        height: 200, // Resmin yüksekliğini sabit bir değer yapın
        resizeMode: 'contain', // Resmi orantılı olarak sığdır
        marginBottom: 10,
    },
    title: {
      fontSize: 22, // Başlık font boyutunu ayarlayın
      fontWeight: 'bold',
      color: '#333', // Başlık metni rengi
      textAlign: 'center',
      marginTop: 20, // Başlığın üstündeki boşluk
    },
    description: {
      fontSize: 16, // Açıklama metni font boyutu
      color: '#666', // Açıklama metni rengi
      textAlign: 'center',
      paddingHorizontal: 30, // Açıklama metninin kenar boşlukları
      marginTop: 10, // Açıklamanın üstündeki boşluk
    },
    button: {
      backgroundColor: '#5cb85c', // Düğme arka plan rengi
      paddingVertical: 12, // Dikey padding
      paddingHorizontal: 20, // Yatay padding
      borderRadius: 25, // Düğme kenar yuvarlaklığı
      width: 250, // Düğme genişliği
      alignItems: 'center',
      marginBottom: 20,
      shadowColor: '#000', // Gölgelendirme
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    buttonText: {
      color: '#fff', // Düğme metni rengi
      fontSize: 18, // Düğme metni boyutu
      fontWeight: 'bold',
    },
    skipText: {
      color: '#5cb85c', // Atla metni rengi
      fontSize: 18, // Atla metni boyutu
    },
    paginationWrapper: {
    position: 'absolute',
    bottom: 20, // veya istediğiniz başka bir değer
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationDot: {
    height: 7,
    width: 7,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  });
  

export default Onboarding;
