import React,{ Component } from "react"
import { Button, Text, TextInput } from "react-native"
import styles from "../../styles"

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
                    //value = {`${this.state.qtdeNumeros}`}
                    onChangeText = {this.alterarQtdNumero}
                />
                
                <Button
                title = 'Gerar'
                onPress={this.gerarNumeros}
                />

                <Text>{this.state.numeros.join(',')}</Text>
            </>
        )
    }
}