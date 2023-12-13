import { StyleSheet, Text, View, Image } from 'react-native';
import Pix from '../../components/Pix';


export default function Transferencia() {
    return (
      <View style={styles.container}>
        <Pix/>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#242424',
    },
  });
  