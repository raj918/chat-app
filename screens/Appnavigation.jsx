import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Roomlist from './Roomlist';
import Chatscreen from './Chatscreen';
import Createroom from './Createroom';
import Usernamecreate from './Usernamecreate';
import { NavigationContainer } from '@react-navigation/native';

const Appnavigation = () => {
const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name='Usernamecreate'  component={Usernamecreate}
        options={{headerShown:false}}/>
        <Stack.Screen name='Roomlist' component={Roomlist}
        options={{headerShown:false}}/>
        <Stack.Screen name='Chatsscreen' component={Chatscreen}
        options={{headerShown:false}}/>
        <Stack.Screen name='Createroom' component={Createroom}
        options={{headerShown:false}}/>
    </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default Appnavigation

const styles = StyleSheet.create({})