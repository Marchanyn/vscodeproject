import { StyleSheet, TextInput, View,Button} from 'react-native';
import React, { useState } from 'react';

export default function Form({addHandler}) {
    const [text,setValue] = useState('')

    const onChange= (text)=>{
        setValue(text);
    }

  return (
    <View>
        <TextInput style = {styles.input} onChangeText={onChange} placeholder='Введите что нужно'/>
        <Button style = {styles.but} onPress={()=> addHandler(text) } title = "Добавить"/>
    </View>
  );
}

const styles = StyleSheet.create({
   input:{
    borderBottomWidth: 1,
    padding: 10,
    marginVertical: 30,
    marginHorizontal: '20%',
    width: '60%'
   },
   but:{
        width: 10,
        color: 'green',
        height: 100
   }
});
