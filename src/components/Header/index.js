import React from "react";
import {View, StyleSheet, Text, StatusBar, TouchableOpacity} from "react-native";
import {Feather} from '@expo/vector-icons'
const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header(){
    return(
        <View style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.username}>Giovanna Vieira</Text>

            <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                <Feather name="user" size={27} color="#FFF" />
            </TouchableOpacity>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#3C0375',
        paddingTop: statusBarHeight,
         
    }
})