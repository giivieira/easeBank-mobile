import React from "react";
import {View,Text, StyleSheet, TouchableOpacity, ScrollView, Image} from "react-native";

import {AntDesign} from '@expo/vector-icons'

export default function Actions() {
    return (
        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <Image source={require('../../../assets/image-pix.png')}
                    style={styles.actionButton}/>
                </View>
                <Text style={styles.labelButton}>Pix</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        color: '#FFF',
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart: 14,
    },
    actionButton:{
        alignItems: 'center',
        
    },
    labelButton:{
        color: '#FFF',
        marginTop: 10
    }
})
