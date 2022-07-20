import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Screens/Home';
import HomeScreen from './src/Screens/HomeScreen';
import FileUploadScreen from './src/Screens/FileUploadScreen';
import { AntDesign } from '@expo/vector-icons';
import { Button, View } from 'react-native';
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();


const UploadFile =()=>{
  console.log("hello");
}
function App() {
  
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
        <Stack.Screen  name="HomeScreen" component={HomeScreen} /> */}
        <Stack.Screen 
         name="FileUpload" 
         component={FileUploadScreen} 
         options ={
           {title: 'Home page'},
           {headerRight: () => (
           <View>
             <AntDesign onPress={UploadFile}  name="upload" size={34} color="blue" />
             </View>)
           }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
button:{
  width:100,
  height:100
}
})

export default App;