import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AddContacts } from './screens/AddContacts';
import { initDatabase } from './db/Database';
import { ListContacts } from './screens/ListContacts';

initDatabase()

export default function App() {
  return (
    <View style={styles.container}>
      <AddContacts/>
      <ListContacts/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
