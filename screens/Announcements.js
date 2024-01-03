import React from 'react';
import { StyleSheet, ScrollView,} from 'react-native';
import CampaignsCard from '../components/CampaignsCard';
import NotificationPermissionCard from '../components/NotificationPermissionCard';

const Announcements = ({ navigation }) => {
  // Kampanyaları ve diğer bilgileri temsil eden sahte veriler
  const campaigns = [
    {
      id: '1',
      title: 'New Pharmacy Opening',
      description: 'We are excited to announce the opening of our new pharmacy branch!',
      imageUri: 'https://img.freepik.com/free-vector/modern-sale-banner-with-text-space-area_1017-27331.jpg',
      // Diğer kampanya bilgileri
    },
    // Diğer kampanya öğeleri...
  ];

  const handleGrantPermission = () => {
    console.log('Bildirim izni verildi.');
  }

    return (
      <ScrollView style={styles.container}>
        <NotificationPermissionCard onGrantPermission={handleGrantPermission} />
        {campaigns.map((campaign) => (
          <CampaignsCard key={campaign.id} campaign={campaign} navigation={navigation}/>
        ))}
      </ScrollView>
    );
}; // Add a closing parenthesis here

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
 
  // Diğer stiller...
});

export default Announcements;
