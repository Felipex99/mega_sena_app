import React,{ Component } from "react"
import { Button, Text, TextInput, View } from "react-native"
import styles from "../../styles"
import Numero from "./MegaNumero"

export default class Mega extends Component{


    
    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    }

    alterarQtdNumero = (qtde) => {
        this.setState({qtdeNumeros: + qtde})
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdeNumeros)
            .fill()
            .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
            .sort((a, b) => a - b)
        this.setState({ numeros })
    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <MegaNumero num={num} />
        })
    }

    render(){
        return (
            <>
                <Text style = {styles.title}>
                    Gerador de Mega-Sena
                </Text>

                <TextInput
                    keyboardType = {'numeric'}
                    style = {{borderBottomWidth: 2,fontSize:20}}
                    placeholder = "Qtde de Números"
                    value = {`${this.state.qtdeNumeros}`}
                    onChangeText = {this.alterarQtdNumero}
                />
                
                
                <Button
                title = 'Gerar'
                onPress={this.gerarNumeros}
                />

                <View
                    style = {{
                        marginTop: 20,
                        flexDirection:'row',
                        flexWrap:'wrap',
                        justifyContent: 'center'
                    }}>
                    {this.exibirNumeros()}
                </View>

                <Text>{this.state.numeros.join(',')}</Text>
            </>
        )
    }
}