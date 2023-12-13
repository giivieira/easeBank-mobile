import axios from 'axios';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function FormSignIn({ }) {
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        navigation.navigate("Home");

        // await axios
        //     .post("http://localhost:8000/api/token/", {
        //         cpf: cpf,
        //         password: password,
        //     })
        //     .then((response) => {
        //         navigation.navigate("Home");

        //         setCpf("");
        //         setPassword("");
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     });

        // setLoading(false)
    };


    return (
        <View style={styles.container}>
            <Text style={styles.itemTitle}>Bem-vindo (a) de volta!</Text>
            <Text style={styles.txt}>CPF</Text>
            <TextInput style={styles.input} onChangeText={(e) => setCpf(e)} placeholder="CPF" />
            <Text style={styles.txt}>Password</Text>
            <TextInput style={styles.input} onChangeText={(e) => setPassword(e)} placeholder="Password" secureTextEntry={true} />
            <TouchableOpacity style={styles.btn}
                onPress={handleSubmit}>
                <Text style={styles.action}>Entrar</Text>
            </TouchableOpacity>
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#282828',
        height: 500,
        width: 360,
        borderRadius: 50,
        marginStart: 14,
        marginEnd: 14,
        marginTop: 0,
    },

    itemTitle: {
        color: '#fff',
        fontWeight: '900',
        fontSize: 25,
        marginTop: 40,
        marginStart: 20,
    },

    input: {
        height: 60,
        width: '90%',
        margin: 12,
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        color: '#fff',
        borderColor: '#fff'
    },

    txt: {
        fontSize: 20,
        fontWeight: '600',
        color: '#fff',
        marginStart: 20,
        marginTop: 30
    },

    btn: {
        backgroundColor: '#fff',
        width: 140,
        height: 40,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        marginStart: 100,
        marginEnd: 100
    },

    action: {
        color: '#3C0375',
        fontSize: 18,
        fontWeight: '900',
    }
})