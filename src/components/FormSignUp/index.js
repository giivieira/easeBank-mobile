import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function FormSignUp({ }) {
    return (
        <View style={styles.container}>
            <Text style={styles.itemTitle}>Bem-vindo (a)!</Text>
            <Text style={styles.txt}>CPF</Text>
            <TextInput style={styles.input} placeholder="CPF"/>

            <Text style={styles.txt}>E-mail</Text>
            <TextInput style={styles.input} placeholder="E-mail"/>

            <Text style={styles.txt}>Nome</Text>
            <TextInput style={styles.input} placeholder="Nome"/>

            <Text style={styles.txt}>Sobrenome</Text>
            <TextInput style={styles.input} placeholder="Sobrenome"/>

            <Text style={styles.txt}>Password</Text>
            <TextInput style={styles.input} placeholder="Password" secureTextEntry={true}/>
            
            <TouchableOpacity style={styles.btn}
            onPress={() => NavigationPreloadManager.navigate('CriarConta')}>
            <Text style={styles.action}>Criar conta</Text>
            </TouchableOpacity>
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#282828',
        height: 700,
        width: 360,
        borderRadius: 50,        
        marginStart: 14,
        marginEnd: 14,
    },

    itemTitle: {
        color: '#fff',
        fontWeight: '900',
        fontSize: 25,
        marginTop: 20,
        marginStart: 20,
    },

    input: {
        height: 50,
        width: '90%',
        margin: 12,
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        color: '#fff',
        borderColor: '#fff'
    }, 

    txt: {
        fontSize: 15,
        fontWeight: '600',
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
    marginTop: 10,
    marginStart: 100,
    marginEnd: 100
    },

    action: {
    color: '#3C0375',
    fontSize: 18,
    fontWeight: '900',
    }
})