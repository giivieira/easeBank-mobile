import React, { startTransition } from "react";
import {View, Text, StyleSheet} from 'react-native';

export default function Balance({saldo}) {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.itemTitle}>Saldo</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.balance}>{saldo}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#232323',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 30, 
        paddingTop: 22,
        paddingBottom: 22,
    },
    itemTitle:{
        fontSize: 20,
        color: '#FFF'
    },
    content:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    currencySymbol:{
        fontSize: 22,
        color: '#FFF',
        marginRight: 6,
    },
    balance:{
        fontSize: 22,
        color: '#FFF',
    }
})
