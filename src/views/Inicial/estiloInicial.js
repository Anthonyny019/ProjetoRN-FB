import { StyleSheet } from 'react-native';

const estiloInicial = StyleSheet.create({
   container: {   
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
   },
   header: {
      height: 50,
      width: '100%',
      backgroundColor: '#072e09',
      flexDirection: 'row',
      alignItems: 'flex-end',    
   },
   fundo: {   
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',     
      width: '100%',
      height: '100%',
   },
   botaoBackground: {
      width: 160,
      height: 120,
      borderRadius: 10,
      overflow: 'hidden',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: 10,
      borderWidth: 1,
      borderColor: '#072e09',
   },
   botaoTexto: {
      fontSize: 22,
      color: '#FFFFFF',
   },
});

  export default estiloInicial;