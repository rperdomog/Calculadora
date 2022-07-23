import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props {
  texto: string;
  color?: string;
  ancho?: boolean
}

const ButtonCalc = ({texto, color = '#2d2d2d', ancho = false }: Props) => {
  return (
    <View style={{
      ...styles.boton,
      backgroundColor: color,
      width: (ancho) ? 170 : 80
    }}>
            <Text style={{
              ...styles.botonText,
              color: ( color === '#9b9b9b' ? 'black' : 'white')  
            }}>{texto}</Text>
    </View>
  )
}

export { ButtonCalc };