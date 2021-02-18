import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Imagem from './SRC/Components/Imagem';
import Texto from './SRC/Components/Texto';
import Botao from './SRC/Components/Botao';

class Aps extends Component{
  render(){

    let nome = 'Klayver';

    return(
      <View style={styles.container}> 
        <Texto mensagem='Olá seja bem vindo'/>
          <Text>Lorem Ipsum simply dummy text of the {nome}</Text>
          <Imagem largura ={500} altura={500} nomeImagem='Clique aqui para acessar'/>
          <Botao/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    margin: 30,
    justifyContent:'center',
    alignItems:'center'
  }
})

export default Aps;