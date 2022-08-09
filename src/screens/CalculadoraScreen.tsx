import React from 'react';
import { Text, View } from 'react-native'
import { ButtonCalc } from '../components/ButtonCalc'
import { styles } from '../theme/appTheme'

import { useCalculadora } from '../hooks/useCalculadora';

const CalculadoraScreen = () => {

   const {
        numeroAnterior,
        numero,
        limpiar,
        armarNumero,
        positivoNegativo,
        btnBorrar,
        btnDividir,
        btnSumar,
        btnRestar,
        btnMultiplicar,
        calcular
   } = useCalculadora();
        
    return (
        <View style={ styles.calculadoraContainer}>
            {
                (numeroAnterior !== '0') && (
                    <Text style={ styles.resultadoChico }>{numeroAnterior}</Text>
                )
            }
            
            <Text 
                style={ styles.resultado }
                numberOfLines={ 1 }
                adjustsFontSizeToFit
            >
                { numero }
            </Text>
    
            
            <View style={ styles.fila }>
                <ButtonCalc texto='C' color='#9b9b9b' accion={ limpiar } />
                <ButtonCalc texto='+/-' color='#9b9b9b' accion={ positivoNegativo }/>
                <ButtonCalc texto='del' color='#9b9b9b' accion={ btnBorrar }/>
                <ButtonCalc texto='/' color='#FF9427' accion={ btnDividir }/>
            </View>
            <View style={ styles.fila }>
                <ButtonCalc texto='7' accion={ armarNumero }/>
                <ButtonCalc texto='8' accion={ armarNumero }/>
                <ButtonCalc texto='9' accion={ armarNumero }/>
                <ButtonCalc texto='x' color='#FF9427' accion={ btnMultiplicar }/>
            </View>
            <View style={ styles.fila }>
                <ButtonCalc texto='4' accion={ armarNumero }/>
                <ButtonCalc texto='5' accion={ armarNumero } />
                <ButtonCalc texto='6' accion={ armarNumero }/>
                <ButtonCalc texto='-' color='#FF9427' accion={ btnRestar }/>
            </View>
            <View style={ styles.fila }>
                <ButtonCalc texto='1' accion={ armarNumero }/>
                <ButtonCalc texto='2' accion={ armarNumero }/>
                <ButtonCalc texto='3' accion={ armarNumero }/>
                <ButtonCalc texto='+' color='#FF9427' accion={ btnSumar }/>
            </View>
            <View style={ styles.fila }>
                <ButtonCalc texto='0' accion={ armarNumero } ancho/>
                <ButtonCalc texto='.' accion={ armarNumero }/>
                <ButtonCalc texto='=' color='#FF9427' accion={ calcular }/>
            </View>
        </View>
      )
        
}

    
    

   


export default CalculadoraScreen;