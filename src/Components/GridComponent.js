import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function GridComponent(
{
    data = [{image:'', headline:""}]
}
) {
  return (
    <View style={styles.container}>
         <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.card}>
             
        <View style = {styles.grid}>
        <Image
        style={styles.image}
        source={require('../assest/demo.jpg')}
      />
      <Text style={styles.imageHeadLine}>Data Not loading, Please check redux </Text>
        </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:20
  },
  image:{
      height:190,
      width:180,
  },
  imageHeadLine:{
      marginTop:-50,
      width:160,
      color:'#ffffff',
      fontWeight:'600',
      marginHorizontal:10
  }
});
