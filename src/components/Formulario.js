import React, {useState} from 'react';
import {Text, TextInput, StyleSheet} from 'react-native'

import colors from '../constants/colors';

const Formulario = ({switchValue}) => {

  const [name, setName] = useState('Bruno');
  return (
    <>
    <Text
    style={styles.text1}
    >Ingrese su nombre</Text>

    <TextInput
        style={styles.input}
        value={name}
        onChangeText={text => setName(text)}
    />
    
           {!switchValue ? <Text style={styles.text2}>Hola {name}</Text>  : <Text style={styles.text3}>Adios {name}</Text>}
    
    </>
  )
}

const styles = StyleSheet.create({
    
    text1: {
      fontSize:30,
      marginBottom:30,
      fontFamily: 'Roboto-Black',
      color: colors.white
    },
    text2: {
        fontSize:30,
        fontWeight: 'normal',
        marginTop:50,
        fontFamily: 'Roboto-Regular',
        color: colors.LemonChiffon
      },
      text3: {
        fontSize:30,
        fontWeight: 'normal',
        marginTop:50,
        fontFamily: 'Roboto-Regular',
        color: colors.LemonChiffon
      },
    input:{
      borderWidth:2,
      borderColor: colors.white,
      padding: 8,
      width:200,
      fontFamily: 'SpaceMono-Regular',
    },
  });

export default Formulario