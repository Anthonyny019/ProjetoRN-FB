import React, { useState } from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import estiloItemLista from './estiloItemLista';
import { LinearGradient } from 'expo-linear-gradient';

const ItemLista = ({data, detalhe}) => {

    const [item, setItem] = useState(data);

    return (
        <TouchableOpacity style={estiloItemLista.areaItens} onPress={detalhe}>

            <LinearGradient colors={['#147b14', '#96d9b7', '#96d9b7']}>
                <Text style={estiloItemLista.itemNome}> {item.nome} </Text>
            </LinearGradient>
            <Text style={estiloItemLista.itemSala}> {item.turma} ({item.sala}) </Text>
            

            <LinearGradient colors={['#96d9b7', '#96d9b7', '#147b14']}>
                <Text> </Text>
                {/*<Image 
                    resizeMode='contain'
                    style={estiloItemLista.itemFoto}
                    source={item.foto}
                />
                */}
            </LinearGradient>
        
        </TouchableOpacity>
    );
}

export default ItemLista;