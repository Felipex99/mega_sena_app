import React from "react"
import { View, StyleSheet } from "react-native"
import Quadrado from "./Quadrado"
export default ()=>{
    return(
        <View style = {style.V0}>
            <Quadrado cor = "#ff33cc" style = {style.V0}/>
            <Quadrado cor = "#009" style = {style.V1}/>
            <Quadrado cor = "#090" style = {style.V2}/>
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
        height:300,
        backgroundColor:"#ff33cc",
    },
    V2:{
        flexGrow:3,
        backgroundColor:"#990",
    },
    V3:{
        flexGrow:1,
        backgroundColor:"#009",
    }
})