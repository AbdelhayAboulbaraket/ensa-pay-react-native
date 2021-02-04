import React from 'react'
import {Keyboard, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import Creanciers from '../creanciers/Creanciers';
import Historique from '../historique/Historique';
import styles from "./style";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons,FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input, Button, Text } from "react-native-elements";


export default function PaimentFacture() {

  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator>
        <Tab.Screen name="Liste des créanciers" component={Creanciers} options={{
        tabBarLabel: 'Liste des créanciers',
        tabBarIcon: ({}) => (
            <FontAwesome name="money" size={20} />
        ),
      }}/>
        <Tab.Screen name="Historique" component={Historique} options={{
        tabBarLabel: 'Historique',
        tabBarIcon: ({}) => (
            <FontAwesome name="history" size={20} />
        ),
      }}/>
      </Tab.Navigator>
      </SafeAreaView>
  );
    }