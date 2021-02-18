import React,{Component} from 'react';
import {View, Text} from 'react-native';

class Texto extends Component{render(){ return (<View><Text style = {{color:'#0000FF', fontSize:25}}>{this.props.mensagem}</Text></View>)}}

export default Texto;