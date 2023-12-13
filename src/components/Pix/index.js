import React, { startTransition } from "react";
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';

// Criando componente que mostra a fatura do cartão do usuário
export default function Pix({ }) {
    return (

        <ImageBackground style={styles.container}
            source={require('../../assets/quadriculado-fundoCinza.png')}>
            <View>
                <View style={styles.item}>

                    <Text style={styles.itemTitle}>Transferência Pix</Text>

                    <Text style={styles.txt}>Destinatário</Text>
                    <TextInput style={styles.input} placeholder="Destinatário" />

                    <Text style={styles.txt}>Chave pix</Text>
                    <TextInput style={styles.input} placeholder="Chave pix" />

                    <Text style={styles.txt}>Valor</Text>
                    <TextInput style={styles.input} placeholder="00,00" />

                    <Text style={styles.txt}>Descrição</Text>
                    <TextInput style={styles.input} placeholder="Descrição" />

                    <TouchableOpacity style={styles.btn}
                        onPress={() => NavigationPreloadManager.navigate('Transferir')}>
                        <Text style={styles.action}>Transferir</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </ImageBackground>
    );
}

//Estilizando o container que guarda as informações
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        paddingTop: 20,
        paddingBottom: 22,
        marginTop: 180
    },

    //Estilizando as informações contidas no container
    itemTitle: {
        fontSize: 25,
        color: '#FFF',
        fontWeight: '800',
        marginBottom: 20,
        marginStart: 20
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    currencySymbol: {
        fontSize: 22,
        color: '#FFF',
        marginRight: 6,
        fontWeight: '800'
    },
    input: {
        height: 40,
        width: '90%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 50,
        color: '#fff',
        borderColor: '#fff'
    },

    txt: {
        fontSize: 18,
        fontWeight: '700',
        color: '#fff',
        marginStart: 20,
        marginTop: 8
    },

    btn: {
        backgroundColor: '#fff',
        width: 140,
        height: 40,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginStart: 100,
        marginEnd: 100
    },

    action: {
        color: '#3C0375',
        fontSize: 18,
        fontWeight: '900',
    }

})
