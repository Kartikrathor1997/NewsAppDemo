import { StatusBar } from 'expo-status-bar';
import React, { useEffect  } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CommonContainer from '../Components/CommonContainer';
import GridComponent from '../Components/GridComponent';
import * as actions from '../Redux/actions/index'
import { useDispatch, useSelector } from 'react-redux';

export default function Dashboard() {
    const dispatch = useDispatch();
    const news = useSelector((state)=> state.news);


useEffect(()=>{
    dispatch(actions.getNewsAction);
},[])

function displayNews() {
    console.log("citydata", user);
    return (
      <FlatList
        data={user.news.data}
        renderItem={({ item }) => (
          <View style={styles.card}>
              {console.log("news data", news?.data)}
          </View>
        )}
      />
    );
  }
    
  return (
    <View style={styles.container}>
        {displayNews}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff20',
  },
});
