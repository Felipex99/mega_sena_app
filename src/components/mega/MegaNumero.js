import React from "react"
import { Text, View, StyleSheet } from "react-native"
import styles from '../../styles'

export default ({num}) => {
    return(
        <View style = {style.Conteiner}>
            <Text style = {[styles.title, style.Num]}>
                {num}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    Conteiner: {
        height: 50,
        width: 50,
        backgroundoColor: '#000',
        margin: 5,
        borderRadius: 25
    },
    Num: {
        color: '#FFF',

    }
})