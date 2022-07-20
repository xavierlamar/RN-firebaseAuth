import React,{useState} from 'react'
import { Button, Text, View,StyleSheet, Image } from 'react-native'
import * as DocumentPicker from 'expo-document-picker';

const FileUploadScreen = ()=>  {
const [document,setDocument] =useState(null)

    const pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        alert(result.uri);
        console.log(result);

        if (!result.cancelled){
            setDocument(result)
        }
        }

    return (
      <View style={styles.container}>
        <Image source={{uri:document}} style={{width:300,height:300}} />
        <Button onPress={pickDocument} style={styles.btn1 } title='choose document' />
        <Button style={styles.btn2} title='upload' />
      </View>
    )
  }

  const upload =()=>{

  }

  const styles = StyleSheet.create({
      container:{
          flex:1,
          justifyContent:'center',
          alignItems:'center'
      },
   
  })
export default FileUploadScreen