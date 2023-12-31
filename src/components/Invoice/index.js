import React, { startTransition } from "react";
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

// Criando componente que mostra a fatura do cartão do usuário
export default function Invoice({ fatura }) {
    return (

        <ImageBackground style={styles.container} source={require('../../assets/quadriculado-fundoCinza.png')}>
        <View >
                <View style={styles.item}>

                    <Text style={styles.itemTitle}>Fatura do cartão</Text>
                    <View style={styles.content}>
                        <Text style={styles.currencySymbol}>R$</Text>
                        <Text style={styles.Invoice}>{fatura}</Text>
                    </View>
                </View>
            
        </View>
        </ImageBackground>
    );
}

//Estilizando o container que guarda as informações
const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#2E2E2E',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginStart: 14,
        marginEnd: 14,
        paddingTop: 22,
        paddingBottom: 22,
        marginTop: 50
    },

    //Estilizando as informações contidas no container
    itemTitle: {
        fontSize: 20,
        color: '#FFF'
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    currencySymbol: {
        fontSize: 22,
        color: '#FFF',
        marginRight: 6,
    },
    Invoice: {
        fontSize: 22,
        color: '#FFF',
    }
})
