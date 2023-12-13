import { StyleSheet, Text, View, Image } from 'react-native';
import FormSignUp from '../../components/FormSignUp';

export default function SignUp() {
    return (
      <View style={styles.container}>
        <Image source={require('../../../assets/iconWithName.png')} 
        style={styles.logo}/>
        <FormSignUp/>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#171717',
    },

    logo: {
        marginTop: 30,
        marginStart: 100
    }
  });
  