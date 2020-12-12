import { StyleSheet } from 'react-native';

const estiloItemLista = StyleSheet.create({
    areaItens: {   
        flex: 1,
        backgroundColor: '#96d9b7',
    },
    itemNome: {   
        height: 40,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 15,
    },    
    itemSala: {   
        fontSize: 18,
        textAlign: 'center',
    },    
    itemFoto: {   
        flex: 1,
        height: 300,
        marginTop: 20,
        marginBottom: 20
    },
});

export default estiloItemLista;
