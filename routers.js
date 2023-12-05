import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Inicial from './src/components/Inicial/Header';
import Home from './src/pages/Home/index'


const Stack = createNativeStackNavigator()
export default function Routers() {
  return (
      <Stack.Navigator
        initialRouteName='Inicial'
      >
        <Stack.Screen 
          name='Inicial' //Nome do caminho que voce passa no botão quando for chamar essa tela  onPress={() => navigation.navigate('Inicial')} <- Exemplo
          component={Inicial} //tela
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name='Home'
          component={Home}
          options={{
            headerShown:false
          }}
        />
        
      </Stack.Navigator>
  );
}