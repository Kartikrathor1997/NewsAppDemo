import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function CommonContainer() {
  return (
    <View style={styles.container}>
        <View style= {styles.justify}>
        <Text style= {styles.headlineText}>Top Headlines</Text>   

        <View style= {styles.flexDirection}>

        <TouchableOpacity style={{alignItems:'center'}}>
            <Image
                style = {styles.icon}
                source={require('../assest/s.png')}
            />
        </TouchableOpacity>

        <TouchableOpacity style={{marginHorizontal:20}}>
            <Image
                style = {styles.iconMenu}
                source={require('../assest/menu.png')}
            />
        </TouchableOpacity>

        </View>
  
        </View>
        
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:60,
    width:'100%',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 20,
  },
  headlineText:{
      fontWeight:'bold',
      fontSize:20,
      marginLeft:20,
      marginTop:10
  },
  justify:{
      flexDirection:'row',
      justifyContent:'space-between'
  },
  icon:{
      alignItems:'center',
      marginTop:10,
      height:30,
      width:30  
  },
  flexDirection:{
      flexDirection:'row'
  },
  iconMenu:{
      height:50,
      width:40
  }
});
