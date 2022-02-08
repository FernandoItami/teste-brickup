import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import TaskList from './Views/TaskList';
import TaskManager from './Views/TaskManager';
import TaskDetails from './Views/TaskDetails';
import Camera from './components/Camera'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ef8354',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24
          },
        }}
      >
        <Stack.Screen 
          name='Tasks' 
          component={TaskList}
          options={({navigation}) => ({
            title: 'Tarefas',
            headerRight: () => (
              <Pressable style={styles.button}
                onPress={() => navigation.navigate('Manager')}
              >
                <Text style={styles.buttonText}>+</Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen 
          name='Manager'
          component={TaskManager}
          options={{
            title: 'Nova Tarefa'
          }}
        />
        <Stack.Screen 
          name='Details'
          component={TaskDetails}
          options={{
            title: 'Tarefa',
          }}
        />
        <Stack.Screen 
          name='Camera'
          component={Camera}
          options={{
            title: 'Camera',
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
    flexDirection: 'column',
  },
  button: {
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#bb3e03',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ef8354'
  }
});
