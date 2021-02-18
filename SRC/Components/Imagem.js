import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';


class Imagem extends Component {
    render (){
      let imagem = 'https://image.api.playstation.com/vulcan/img/rnd/202009/2913/TQKAd8U6hnIFQIIcz6qnFh8C.png'
  
      return(
        <View style={styles.container}>
        <Image 
        source={{uri:imagem}}
        style={{width: this.props.largura , height: this.props.altura }}
         />
          <Text>{this.props.nomeImagem}</Text>
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


  export default Imagem;