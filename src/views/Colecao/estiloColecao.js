import { StyleSheet } from 'react-native';

const estiloColecao = StyleSheet.create({
   container: {   
      flex: 1,
   },
   header: {
      height: 50,
      backgroundColor: '#044d03',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 5,
   },
   texto: {
      fontSize: 20,
      color: '#FFFFFF',
      fontWeight: 'bold',
   },

});

  export default estiloColecao;