import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import Animacion from './components/Animacion';
import Usuarios from './components/Usuarios';
import Maquina from './components/Maquina';


export default function App() {
  return (
    <View style={styles.container}>
      <Usuarios></Usuarios>
     
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#540989',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagen:{
    width:300,
    height:300
  }
});
