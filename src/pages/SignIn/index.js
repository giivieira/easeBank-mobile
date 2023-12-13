import { StyleSheet, Text, View, Image } from 'react-native';
import FormSignIn from '../../components/FormSignIn';

export default function SignIn() {
    return (
      <View style={styles.container}>
        <Image source={require('../../../assets/iconWithName.png')} 
        style={styles.logo}/>
        <FormSignIn/>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#171717',
    },

    logo: {
        marginTop: 70,
        marginStart: 100
    }
  });
  