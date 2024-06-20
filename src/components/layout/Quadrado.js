import React from "react"
import { Text, View, StyleSheet } from "react-native"

export default props =>{
    const lado = 50
    return (
        <View style = {{
            height:lado,
            width:lado,
            backgroundColor:props.cor || "#900"
        }}>

        </View>
    )
}