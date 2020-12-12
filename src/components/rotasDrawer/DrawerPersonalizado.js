import React from "react";
import { View, Text, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import estiloRotasDrawer from './estiloRotasDrawer';

function DrawerPersonalizado(props) {
  return (
    <DrawerContentScrollView {...props}>

      <View style={estiloRotasDrawer.fotoContainer}>
        <Image 
          style={estiloRotasDrawer.foto}
          source={require('../../../assets/imagens/foto.png')}
        />
        <Text style={estiloRotasDrawer.nome}>Administrador</Text>
      </View>

      <DrawerItemList {...props}/>

    </DrawerContentScrollView>
  );
}

export default DrawerPersonalizado;