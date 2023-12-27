import AsyncStorage from '@react-native-async-storage/async-storage';

export const checkFirstLaunch = async () => {
  try {
    const hasLaunched = await AsyncStorage.getItem('hasLaunched');
    if (hasLaunched === null) {
      await AsyncStorage.setItem('hasLaunched', 'true');
      return true; // İlk kez açılıyor
    }
    return false; // Daha önce açılmış
  } catch (error) {
    // Hata işleme
    return false; // Hata durumunda varsayılan olarak daha önce açılmış kabul edilir
  }
};
