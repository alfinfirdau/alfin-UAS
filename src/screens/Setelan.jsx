import React, { useState } from 'react';
import { View, StyleSheet, Switch, Text } from 'react-native';
import { List, Divider } from 'react-native-paper';

const SettingsScreen = () => {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

  const onToggleNotifications = () => setIsNotificationsEnabled(!isNotificationsEnabled);
  const onToggleDarkMode = () => setIsDarkModeEnabled(!isDarkModeEnabled);

  // Determine theme styles based on dark mode status
  const themeStyles = isDarkModeEnabled ? darkTheme : lightTheme;

  return (
    <View style={[styles.container, themeStyles.container]}>
      <List.Section title="General Settings">
        <Divider style={themeStyles.divider} />
        <List.Item
          title="Enable Notifications"
          left={() => <List.Icon icon="bell" color={themeStyles.iconColor.color} />}
          right={() => (
            <Switch
              value={isNotificationsEnabled}
              onValueChange={onToggleNotifications}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isNotificationsEnabled ? '#1e90ff' : '#f4f3f4'}
            />
          )}
          titleStyle={themeStyles.itemTitle}
          style={[styles.item, themeStyles.item]}
        />
        <Divider style={themeStyles.divider} />
        <List.Item
          title="Dark Mode"
          left={() => <List.Icon icon="theme-light-dark" color={themeStyles.iconColor.color} />}
          right={() => (
            <Switch
              value={isDarkModeEnabled}
              onValueChange={onToggleDarkMode}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isDarkModeEnabled ? '#1e90ff' : '#f4f3f4'}
            />
          )}
          titleStyle={themeStyles.itemTitle}
          style={[styles.item, themeStyles.item]}
        />
        <Divider style={themeStyles.divider} />
      </List.Section>
    </View>
  );
};

// Light and dark theme styles
const lightTheme = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
  },
  item: {
    backgroundColor: 'white',
  },
  divider: {
    backgroundColor: '#e0e0e0',
  },
  itemTitle: {
    color: '#000',
  },
  iconColor: {
    color: '#1e90ff',
  },
});

const darkTheme = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
  },
  item: {
    backgroundColor: '#1e1e1e',
  },
  divider: {
    backgroundColor: '#333',
  },
  itemTitle: {
    color: '#ffffff',
  },
  iconColor: {
    color: '#ffffff',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    borderRadius: 8,
    marginVertical: 4,
    elevation: 2,
  },
});

export default SettingsScreen;
