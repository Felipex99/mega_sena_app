import React, { useState } from "react"
import { Text, TextInput, View } from "react-native"

export default ()=>{
    const [nome, setNome] = useState('Teste');
    return(
        <View>
            <Text>Digite seu nome:</Text>
            <TextInput
                placeholder = "Insira seu nome"
                value = {null}
                onChangeText = {nome => setNome(nome)
                }/>
        </View>
    )
}