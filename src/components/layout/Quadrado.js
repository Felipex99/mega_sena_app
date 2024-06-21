import React from "react"
import { Text, View, StyleSheet } from "react-native"

export default props =>{
    const lado = 50
    const nome = ""
    return (
        <View style = {{
            height:lado,
            width:lado,
            backgroundColor:props.cor || "#900",
            justifyContent:"center",
            alignItems: "center",
        }}>
            <Text style = {style.text}>{props.nome}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    text: {
        fontWeight: "bold",
        fontSize: 30,
        color: "#ffffff"
    }
})