import { Alert, Button, Image, Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Personaje(props:any) {
    console.log(props.data);
    const [visible, setvisible] = useState(true)

function informacion(item:any){
    Alert.alert('Informacion', item.data.description)
    
}

return (
    <View>
        <TouchableOpacity onPress={()=> setvisible(!visible)}>
    <Text>{props.data.title}</Text>
    <Image source={{uri: props.data.image}} style={styles.img}/>


    </TouchableOpacity>
    </View>
)
}

const styles = StyleSheet.create({
    img:{
        width:300,
        height:200,
        resizeMode:'contain'
    },
    img2:{
        width:80,
        height:100,
        resizeMode:'contain'
    }
})