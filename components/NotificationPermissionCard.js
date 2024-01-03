import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NotificationPermissionCard = ({ onGrantPermission }) => {
  return (
    <View style={styles.card}>
      <Icon name="phone-android" size={24} color="#e53935" style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Bildirimleri açarak kampanyalardan haberdar olabilirsin.</Text>
        <TouchableOpacity style={styles.button} onPress={onGrantPermission}>
          <Text style={styles.buttonText}>İzin Ver</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 16,
    margin: 16,
    borderRadius: 8,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.1,
    elevation: 4,
    alignItems: 'center',
  },
  icon: {
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  button: {
    backgroundColor: '#fff',
    borderColor: '#e53935',
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  buttonText: {
    color: '#e53935',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default NotificationPermissionCard;
