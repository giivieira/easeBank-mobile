import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header';

export default function App() {
  return (
    <View style={styles.container}>
        <Header name="Giovanna Vieira"/>
      <Text>Ease Bank</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
  },
});
