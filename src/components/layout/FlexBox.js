import React from "react"
import { View, StyleSheet, Text } from "react-native"
export default ()=>{
    return(
        <View style = {style.V0}>
            <Text style = {{fontWeight:"bold",fontSize: 40, color:"black"}}>V0</Text>
            <View style = {style.V1}/>
            <View style = {style.V2}/>
            <View style = {style.V3}/>
        </View>
    )
}

const style = StyleSheet.create({
    V0:{
        flexGrow: 1,
        width:100,
        backgroundColor:"#900",
    },
    V1:{
        backgroundColor:"#ff33cc",
        flexGrow:1,
    },
    V2:{
        flexGrow:1,
        backgroundColor:"#990",
    },
    V3:{
        flexGrow:1,
        backgroundColor:"#009",
    }
})