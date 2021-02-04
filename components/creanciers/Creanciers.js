import React, { Component } from 'react'
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import styles from "./style";


export default class Creanciers extends Component {

    render() {
      return ( 
      <View style={styles.container}>
        <Text>Creanciers</Text>
        </View>
      );
    }
  
    componentDidMount() {
    }
  
    componentWillUnmount() {
    }
  
    onLoginPress() {
          alert('fla9i')
    }
  
    
  }