import React from 'react'
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import styles from "./style";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default function Creanciers() {

  const Tab = createBottomTabNavigator();

  return (
      <Text>Creanciers</Text>
  );
    }