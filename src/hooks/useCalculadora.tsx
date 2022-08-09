import { useRef, useState } from 'react';

enum Operadores {
    sumar, restar, multiplicar, dividir
}

const useCalculadora = () => {
    const [ numeroAnterior, setNumeroAnterior ] = useState('0');
    const [ numero, setNumero ] = useState('0');

    const ultimaOperacion = useRef<Operadores>();

    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('0');
    }

    const armarNumero = ( numeroTexto : string ) => {
        /*Doble punto*/
        if( numero.includes('.') && numeroTexto === '.' ) return;


        if ( numero.startsWith('0') || numero.startsWith('-0')){

            if( numero.startsWith('0') && numero.length === 1){
                setNumero( numeroTexto )
            }
            //Punto decimal
            else if ( numeroTexto === '.' ){
                setNumero( numero + numeroTexto )
                //Es cero y tiene punto
            }else if ( numeroTexto === '0' && numero.includes('.')){
                setNumero( numero + numeroTexto )
                //Diferente de cero y tiene punto
            }else if ( numeroTexto !== '0' && !numero.includes('.')){
                setNumero( numero + numeroTexto )
                //Evitar 0000.0
            }else if ( numeroTexto === '0' && numero.includes('.')){
                setNumero( numero )
            }else if ( numeroTexto.startsWith('0') && !numero.includes('.')){
                setNumero( numeroTexto )
                //Diferente de cero y tiene punto
            }else{
                setNumero( numero + numeroTexto )
            }
        }else{
            if( numero.startsWith('0') && numero.length === 1){
                setNumero( numeroTexto )
            }else {
                setNumero( numero + numeroTexto )
            }
            0
        }
    }

    const positivoNegativo = () => {
        if(numero.includes('-')){
            setNumero( numero.replace('-', ''));
        } else {
            setNumero( '-' + numero);
        }
    }

    const btnBorrar = () => {
        let negativo = '';
        let numeroTemp = numero;
        if( numero.includes('-')){
            negativo = '-';
            numeroTemp = numero.substring(1);
        }

        if (numeroTemp.length > 1){
            setNumero( negativo + numeroTemp.slice(0, -1));
        } else {
            setNumero('0')
        }
    }

    const cambiarNumPorAnterior = () => {
        if ( numero.endsWith('.')){
            setNumeroAnterior( numero.slice(0, -1));
        }else {
            setNumeroAnterior(numero);
        }
        setNumero('0');
    }

    const btnDividir = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.dividir;
    }

    const btnSumar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.sumar;
    }

    const btnRestar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.restar;
    }

    const btnMultiplicar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.multiplicar;
    }

    const calcular = () => {
        const num1 = Number( numero );
        const num2 = Number( numeroAnterior );

        switch (ultimaOperacion.current){
            case Operadores.sumar:
                setNumero(`${num1 + num2}`);
                break;

                case Operadores.restar:
                    setNumero(`${num2 - num1 }`);
                    break;

                case Operadores.multiplicar:
                setNumero(`${num1 * num2}`);
                break;

                case Operadores.dividir:
                setNumero(`${num2 / num1}`);
                break;
        }
        setNumeroAnterior( '0' );
    }

    return {
        limpiar,
        armarNumero,
        positivoNegativo,
        btnBorrar,
        btnDividir,
        btnSumar,
        btnRestar,
        btnMultiplicar,
        calcular,
        numero,
        numeroAnterior
    }


}


export { useCalculadora };