import React, { startTransition } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';

export default function GiftCards({}) {
    return (
        <View style={styles.container}>
            <Text style={styles.itemTitle}>Compre gift cards</Text>
            <TouchableOpacity activeOpacity={0.6} style={styles.giftButton}>
                <Image source={require('../../../assets/ifood.png')} /> 
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.6} style={styles.giftButton}>
                <Image source={require('../../../assets/freeFire.png')} /> 
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6} style={styles.giftButton}>
                <Image source={require('../../../assets/amazon.png')} /> 
            </TouchableOpacity>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#1E1E1E',
        height: 120,
        width: 365,
        marginStart: 14,
        marginEnd: 14,
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
    },
    itemTitle:{
        color: '#FFF',
        fontSize: 18
    },
    giftButton:{
        backgroundColor: '#232323',
        marginRight: 30,
        marginTop: 30,
        borderRadius: 50,
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

