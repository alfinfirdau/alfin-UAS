// Notifikasi.js
import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Provider as PaperProvider, Card, Text, IconButton } from 'react-native-paper';
import { useRoute, useNavigation } from '@react-navigation/native';

const Notifikasi = () => {
  const [notifications, setNotifications] = useState([]);
  const route = useRoute();
  const navigation = useNavigation();

  // Add the notification received from route params
  useEffect(() => {
    if (route.params?.notification) {
      setNotifications(prevNotifications => [
        ...prevNotifications,
        route.params.notification,
      ]);
    }
  }, [route.params?.notification]);

  const dismissNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {notifications.length === 0 ? (
            <Text style={styles.noNotification}>No notifications</Text>
          ) : (
            notifications.map((notification) => (
              <Card key={notification.id} style={styles.card}>
                <Card.Title
                  title={notification.title}
                  right={(props) => (
                    <IconButton
                      {...props}
                      icon="close"
                      onPress={() => dismissNotification(notification.id)}
                    />
                  )}
                />
                <Card.Content>
                  <Text>{notification.message}</Text>
                </Card.Content>
              </Card>
            ))
          )}
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    marginVertical: 10,
  },
  noNotification: {
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Notifikasi;
