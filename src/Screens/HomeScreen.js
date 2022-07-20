import { Text, View, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { auth } from './firebase'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () =>{

    const navigation = useNavigation();
    
  const handleSignOut = () => {
      auth
        .signOut()
        .then(()=> {
            navigation.replace("Home")
        })
        .catch(error => alert(error.message));
  }
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Email: {auth.currentUser?.email}</Text>
        <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}>
            <Text style={styles.buttonText}> Sign Out </Text>
            </TouchableOpacity>
      </View>
    )
  } 


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      text:{
          fontWeight:'bold'
      },
      button: {
        backgroundColor:'#0782F9',
        width:'60%',
        padding:15,
        marginTop: 40,
        borderRadius:10
    },
    buttonoutline: {
        backgroundColor:'white',
        marginTop:5,
        borderColor: '#0782F9',
        borderWidth:2
    },
    buttonText : {
        color:'white',
        fontWeight:'700',
        fontSize:16
    },
})
export default HomeScreen