import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AddContacts } from './screens/AddContacts';
import { initDatabase } from './db/Database';
import { ListContacts } from './screens/ListContacts';
import { useState } from 'react';

initDatabase()

export default function App() {

  const [listRefreshKey, setListRefreshKey] = useState(0)

  const refresContactList = () => {
    setListRefreshKey( prevKey => prevKey + 1)
  }
  return (
    <View style={styles.container}>
      <AddContacts onRefreshList={refresContactList}/>
      <ListContacts key={listRefreshKey}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 20
  },
});
