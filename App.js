
import React, {useState} from 'react';
import { StyleSheet, View, SafeAreaView, Switch } from 'react-native';
import Formulario from './src/components/Formulario';
import colors from './src/constants/colors';


import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  
  let [fontsLoaded] = useFonts({
    'Roboto-Black': require('./src/assets/fonts/Roboto-Black_0.ttf'),
    'Roboto-Regular': require('./src/assets/fonts/Roboto-Regular.ttf'),
    'SpaceMono-Regular': require('./src/assets/fonts/SpaceMono-Regular.ttf'),
  });
  

  const [switchValue, setSwitchValue] = useState(false);
  const toggleSwitch = (value) => {
    setSwitchValue(value);
  } 

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    
    <SafeAreaView style={{flex:1}}>
      <View style={switchValue ? styles.container1 : styles.container2}>
        
    <Formulario 
      switchValue={switchValue}
    />
        
        <Switch
          style = {{marginTop: 40}}
          onValueChange={toggleSwitch}
          value={switchValue}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
