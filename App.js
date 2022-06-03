import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import CommonContainer from './src/Components/CommonContainer';
import GridComponent from './src/Components/GridComponent';
import Dashboard from './src/Container/Dashboard';
import store from './src/Redux/store';

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <CommonContainer/>
        <GridComponent/>
        <Dashboard/>
        </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff20',
  },
});
