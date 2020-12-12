import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import estiloColecao from './estiloColecao';
import ItemLista from '../../components/ItemLista/ItemLista';
import { MaterialIcons } from '@expo/vector-icons';
import { AlunosFB } from '../../firebase/AlunosFB';

function Colecao({ navigation }) {

    const [colecao, setColecao] = useState([]);

    const alunosFB = new AlunosFB();

    useEffect(() => {
        alunosFB.pegarColecao()
            .orderBy('nome')
            .onSnapshot((query) => {
                const items = [];
                query.forEach((doc) => {
                    items.push({...doc.data(), id: doc.id});
                });
                setColecao(items);
            });
    }, []);

    const voltar = () => {
        navigation.navigate('Inicial')
    }

    const adicionar = () => {
        navigation.navigate('Item', {item: {}, operacao: 'adicionar'})
    }

    const editar = (item) => {
        navigation.navigate('Item', {item: item, operacao: 'editar'})
    }

    return (
        <View style={estiloColecao.container}>

            <View style={estiloColecao.header}>
                <TouchableOpacity onPress={voltar}>
                    <MaterialIcons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={estiloColecao.texto}>Alunos</Text>
                <TouchableOpacity onPress={adicionar}>
                    <MaterialIcons name="add" size={24} color="white" />
                </TouchableOpacity>
            </View>

            <FlatList 
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                data={colecao}
                renderItem={ ({item}) => <ItemLista data={item} detalh={() => editar(item)} />}
            />

        </View>
    )
}

export default Colecao;
