import React from 'react';
import { View, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

class Animacion extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Animatable.Image
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite"
          source={require("../image/versus.png")}
          style={{ width: 250, height: 250 }}
        />
      </View>
    );
  }
}

export default Animacion;
