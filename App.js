import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import {requestUserPermission,notificationListener} from './src/utils/NotificationService';
const App = () => {
  useEffect(()=>{
    requestUserPermission();
    notificationListener();
  },[])

  return (
    <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
      <Text>Notifications App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})