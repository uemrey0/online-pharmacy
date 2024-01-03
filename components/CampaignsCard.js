import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'; // İkon paketini yükleyin

const CampaignsCard = ({ campaign, navigation }) => {
  return (
    <TouchableOpacity 
      key={campaign.id} 
      onPress={() => navigation.navigate('CampaignDetail', { campaignId: campaign.id })} 
      style={styles.campaignCard}
    >
      <Image source={{ uri: campaign.imageUri }} style={styles.campaignImage} />
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.campaignTitle}>{campaign.title}</Text>
          <Text style={styles.campaignDescription}>{campaign.description}</Text>
        </View>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="chevron-right" size={30} color={"#ccc"} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default CampaignsCard;

const styles = StyleSheet.create({
  campaignCard: {
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 15,
    margin: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  campaignImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10, // Adjust if needed
  },
  textContainer: {
    flex: 1, // Takes as much space as possible
  },
  campaignTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  campaignDescription: {
    fontSize: 14,
    color: '#333',
    marginVertical: 5,
  },
  iconContainer: {
    // Give a specific size to the container if needed
    padding: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    borderRadius: 10,
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  // Removed fontSize and color from icon style since they are not valid here
});
