import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import estiloItem from './estiloItem';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { AlunosFB } from '../../firebase/AlunosFB';

function Item({ navigation, route }) {

    const [item, setItem ] = useState({});
    const {operacao, setOperacao} = route.params;

    const alunosFb = new AlunosFB();

    useEffect(() => {
             setItem(route.params.item);
    }, [route.params.item]);

    const voltar = () => {
        navigation.navigate('Colecao')
    }

    const salvar = (item) => { 
        operacao == 'adicionar' ? alunosFb.adicionarAluno(item) : alunosFb.editarAluno(item);
        voltar();
    }

    const remover = (item) => {
        alunosFb.removerAluno(item);
        voltar();
     }
    
    return (
        <View style={estiloItem.container}>

            <View style={estiloItem.header}>
                <TouchableOpacity onPress={voltar}>
                   <MaterialIcons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={estiloItem.texto}>Cadastrar Aluno</Text>
                <Text></Text>
            </View>
            
            <View style={estiloItem.formularioContainer}>

                <View style={estiloItem.campoContainer}>
                    <FontAwesome5 name="book" size={26} color="#072e09"/>
                    <TextInput  
                        style={estiloItem.campo}
                        placeholder="Nome"
                        placeholderTextColor='#090a0a'
                        onChangeText={nome => setItem({...item, nome})}
                        value={item.nome}
                />
            </View>

            <View style={estiloItem.campoContainer}>
                <FontAwesome5 name="book-reader" size={26} color="#072e09" />
                <TextInput  
                    style={estiloItem.campo}
                    placeholder="Turma"
                    placeholderTextColor='#090a0a'
                    onChangeText={turma => setItem({...item, turma})}
                    value={item.turma}
                />
            </View>

            <View style={estiloItem.campoContainer}>
                <FontAwesome5 name="calendar-alt" size={26} color="#072e09" />
                <TextInput
                    style={estiloItem.campo}
                    placeholder="Sala"
                    placeholderTextColor='#090a0a'
                    keyboardType='numeric'
                    maxLength={4}
                    onChangeText={sala => setItem({...item, sala})}
                    value={item.sala ? item.sala.toString() : item.sala}
                />
            </View>
            
            <View style={estiloItem.botoesContainer}>

                <TouchableOpacity onPress={() => salvar(item)} style={estiloItem.botaoContainer} >
                    <LinearGradient colors={['#96d9b7', '#072e09', '#044d03']} style={estiloItem.botao}>
                        <MaterialIcons name="save" size={28} color="white" />
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => remover(item)} style={estiloItem.botaoContainer}>
                    <LinearGradient colors={['#96d9b7', '#072e09', '#044d03']} style={estiloItem.botao}>
                        <MaterialIcons name="delete" size={24} color="white" />
                    </LinearGradient>
                </TouchableOpacity>
                
            </View>

        </View>


     </View>
    )
}

export default Item;
