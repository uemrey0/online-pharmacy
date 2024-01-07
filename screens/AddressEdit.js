import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const AddressEdit = ({ route, navigation }) => {
  const [selectedIl, setSelectedIl] = useState(null);
  const [selectedIlce, setSelectedIlce] = useState(null);
  const [selectedMahalle, setSelectedMahalle] = useState(null);
  const [tamAdres, setTamAdres] = useState('');
  const [no, setNo] = useState('');
  const [kat, setKat] = useState('');
  const [daire, setDaire] = useState('');
  const [adresTarifi, setAdresTarifi] = useState('');

  const allData = require('../data/data.json');

  // İl, ilçe ve mahalle seçeneklerini oluşturma
  const ilPickerItems = allData.map(il => ({ label: il.name, value: il.name }));
  let ilcePickerItems = selectedIl ? allData.find(il => il.name === selectedIl).towns.map(town => ({ label: town.name, value: town.name })) : [];
  let mahallePickerItems = selectedIl && selectedIlce ? allData.find(il => il.name === selectedIl)?.towns.find(town => town.name === selectedIlce)?.districts.flatMap(district => district.quarters.map(quarter => ({ label: quarter.name, value: quarter.name }))) : [];
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: 'center', // Başlığı ortala
      headerTitle: 'Adres', // Başlıkta gösterilecek metin
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

  useEffect(() => {
    if (route.params) {
        const { il, ilce, mahalle, adres } = route.params;
        // İli kontrol et
        const bulunanIl = allData.find(item => item.name === il);
        console.log(bulunanIl)
        if (bulunanIl) {
            setSelectedIl(il);
            // İlçeyi kontrol et
            const bulunanIlce = bulunanIl.towns.find(town => town.name === ilce);
            if (bulunanIlce) {
                setSelectedIlce(ilce);
                // Mahalleyi kontrol et
                const bulunanMahalle = bulunanIlce.districts.flatMap(district => district.quarters).find(quarter => quarter.name === mahalle);
                if (bulunanMahalle) {
                    setSelectedMahalle(mahalle);
                }
            }
        }
        if (adres) setTamAdres(adres);
    }
  }, [route.params]);


  // Seçilen il ve ilçeye göre ilçe ve mahalle seçeneklerini güncelle
  useEffect(() => {
    setSelectedIlce(null);
    setSelectedMahalle(null);
  }, [selectedIl]);

  useEffect(() => {
    setSelectedMahalle(null);
  }, [selectedIlce]);

  const handleSave = () => {
    // Adres bilgilerini kaydetme işlemleri
    console.log(selectedIl, selectedIlce, selectedMahalle, tamAdres, no, kat, daire, adresTarifi);
    // Kaydetme sonrası işlemler
  };

  return (
    <ScrollView style={styles.container}>
      <RNPickerSelect
        onValueChange={(value) => setSelectedIl(value)}
        items={ilPickerItems}
        placeholder={{ label: "İl seçiniz", value: null, color: '#9EA0A4', }}
        value={selectedIl}
      />
      <RNPickerSelect
        onValueChange={(value) => setSelectedIlce(value)}
        items={ilcePickerItems}
        placeholder={{ label: "İlçe seçiniz", value: null }}
        value={selectedIlce}
      />
      <RNPickerSelect
        onValueChange={(value) => setSelectedMahalle(value)}
        items={mahallePickerItems}
        placeholder={{ label: "Mahalle seçiniz", value: null }}
        value={selectedMahalle}
      />
      <TextInput
        style={styles.input}
        onChangeText={setTamAdres}
        value={tamAdres}
        placeholder="Adres"
      />
      <View style={styles.row}>
        <TextInput
            style={[styles.input, styles.smallInput]}
            onChangeText={setNo}
            value={no}
            placeholder="No"
        />
        <TextInput
            style={[styles.input, styles.smallInput]}
            onChangeText={setKat}
            value={kat}
            placeholder="Kat"
        />
        <TextInput
            style={[styles.input, styles.smallInput]}
            onChangeText={setDaire}
            value={daire}
            placeholder="Daire"
        />
      </View>
      <TextInput
        style={styles.input}
        onChangeText={setAdresTarifi}
        value={adresTarifi}
        placeholder="Adres Tarifi"
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Kaydet</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  smallInput: {
    flex: 1, // Her input'a eşit genişlik ver
    marginHorizontal: 5, // Inputlar arasında boşluk bırak
  },
  button: {
    backgroundColor: '#e53935',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  // Diğer stiller...
});

export default AddressEdit;
