import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ActivityIndicator, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Geocoder from 'react-native-geocoding';

Geocoder.init('AIzaSyCuxhpq45X7J0-yCpKcZ-hzmhR74ufTttU'); // API anahtarınız

const AddressSelection = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [mapRegion, setMapRegion] = useState(null);
  const [address, setAddress] = useState('');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      handleSelectLocation({ nativeEvent: { coordinate: location.coords } });
    })();
  }, []);

  const handleSelectLocation = (eventOrRegion) => {
  let latitude, longitude;

  if (eventOrRegion.nativeEvent) {
    // onPress olayı
    latitude = eventOrRegion.nativeEvent.coordinate.latitude;
    longitude = eventOrRegion.nativeEvent.coordinate.longitude;
  } else {
    // onRegionChangeComplete olayı
    latitude = eventOrRegion.latitude;
    longitude = eventOrRegion.longitude;
  }

  setMapRegion({
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  Geocoder.from(latitude, longitude)
    .then(json => {
      const addressComponent = json.results[0].formatted_address;
      setAddress(addressComponent);
    })
    .catch(error => console.warn(error));
};

  const handleConfirmLocation = () => {
    console.log('Confirmed location: ', address);
    // Adresi onayla ve bir sonraki adıma geç
    // Burada kullanıcıyı başka bir ekrana yönlendirebilirsiniz.
  };

  if (errorMsg) {
    return <Text>{errorMsg}</Text>;
  }

  if (!mapRegion) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        region={mapRegion}
        onRegionChangeComplete={(region) => {
          setMapRegion(region);
          Geocoder.from(region.latitude, region.longitude)
            .then(json => {
              const addressComponent = json.results[0].formatted_address;
              setAddress(addressComponent);
            })
            .catch(error => console.warn(error));
        }}
      >
      </MapView>
      <View style={styles.markerFixed}>
        <Image
          style={styles.marker}
          source={require('../assets/marker.png')} // Özel işaretçi ikonunuz
        />
      </View>
      <View style={styles.addressBar}>
        <Text style={styles.address}>{address}</Text>
        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmLocation}>
          <Text style={styles.confirmButtonText}>DEVAM ET</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  addressBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Hafif saydam beyaz arkaplan
  },
  address: {
    fontSize: 16,
    marginBottom: 10,
  },
  confirmButton: {
    backgroundColor: '#e53935',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  markerFixed: {
    left: '50%',
    marginLeft: -24, // İkonun genişliğinin yarısı
    marginTop: -48, // İkonun yüksekliğinin yarısı
    position: 'absolute',
    top: '50%'
  },
  marker: {
    height: 48, // İkonun yüksekliği
    width: 48, // İkonun genişliği
  },
});

export default AddressSelection;
