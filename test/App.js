import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button,View, FlatList } from 'react-native';
import Header from './components/Header';
import React, { useState } from 'react';
import Listitem from './components/Listitem';
import Form from './components/Form';


export default function App() {
  const [listofitems,setlistofitems] = useState([
    {text: 'Купить молоко',key: "1"},
    {text: 'Купить дом',key: "2"},
    {text: 'Купить машину',key: "3"},
  ])
  const deleteHandler = (key) =>{
    setlistofitems((list)=>{
      return list.filter(listofitems => listofitems.key != key)
    })
  }
  const addHandler= (text)=>{
    setlistofitems((list)=>{
      return[
        {text:text,key: Date.now().toString(36).substring(7)},
        ...list
      ]
    })
  }

  return (
    
    <View>
      <Header/>
      <Form addHandler = {addHandler}/>
        <View>
          <FlatList data={listofitems} renderItem={({item})=>(
            <Listitem el={item} deleteHandler={deleteHandler}/>
          )}/>
            
          
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  }
});
