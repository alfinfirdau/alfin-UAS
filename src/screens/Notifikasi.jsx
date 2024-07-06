// App.js
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Provider as PaperProvider, Button, Card, Text, IconButton } from 'react-native-paper';

const App = () => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = () => {
    setNotifications([
      ...notifications,
      {
        id: Math.random().toString(),
        title: 'New Notification',
        message: 'This is a new notification message',
      },
    ]);
  };

  const dismissNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Button mode="contained" onPress={addNotification}>
          Show Notification
        </Button>
        <ScrollView>
          {notifications.map((notification) => (
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
          ))}
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
});

export default App;
