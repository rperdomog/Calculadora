import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'black',      
    },
    calculadoraContainer: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: 'black',
        justifyContent: 'flex-end',
    },
    resultado: {
        fontSize: 60,
        color: 'white',
        textAlign: 'right',
        marginBottom: 10
         
    },
    resultadoChico: {
        fontSize: 30,
        color: 'rgba(255,255,255,0.5)',
        textAlign: 'right',
         
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'center',
        
    },
    boton: {   
        height: 80,
        width: 80,
        backgroundColor: '#2d2d2d',
        borderRadius: 100,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal: 5,
        marginVertical: 6

    },
    botonText: {
        fontSize: 30,
        color: 'white',
        alignSelf: 'center',
        fontWeight: '300'       
        
    }

})