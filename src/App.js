import React from "react"
import { Text, View, SafeAreaView } from "react-native"
import styles from "./styles"
import FlexBox from "./components/layout/FlexBox"
import Mega from "./components/mega/Mega"
import DigiteSeuNome from "./components/DigiteSeuNome"
import Quadrado from "./components/layout/Quadrado"


export default () => {
    return(
        <SafeAreaView style = {styles.view}>
            <Mega qtdNumeros = {7}/>
        </SafeAreaView>
    )
}