import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const notifications = [
  {
    id: '1',
    title: 'Match Found',
    time: '2 min ago',
    description: 'Drone detected a face with high similarity',
    similarity: '94%',
    drone: 'Drone #003',
  },
  {
    id: '2',
    title: 'Possible Match',
    time: '15 min ago',
    description: 'Drone detected a face with medium similarity',
    similarity: '73%',
    drone: 'Drone #001',
  },
  {
    id: '3',
    title: 'Drone Connected',
    time: '1 hour ago',
    description: 'Drone #003 successfully connected to the system',
  },
  {
    id: '4',
    title: 'Patrol Completed',
    time: '3 hours ago',
    description: 'Drone #002 completed scheduled patrol',
  },
];

const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationItem}>
            <Text style={styles.notificationTitle}>{item.title}</Text>
            <Text style={styles.notificationTime}>{item.time}</Text>
            <Text style={styles.notificationDescription}>{item.description}</Text>
            {item.similarity && (
              <Text style={styles.notificationDetails}>
                Similarity: {item.similarity} • {item.drone}
              </Text>
            )}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  notificationItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  notificationTime: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  notificationDescription: {
    fontSize: 14,
    marginBottom: 4,
  },
  notificationDetails: {
    fontSize: 12,
    color: '#1E90FF',
  },
});

export default NotificationsScreen;