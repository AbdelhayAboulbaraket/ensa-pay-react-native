import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View  } from "react-native";
import LoginScreen from "./components/login/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PaimentFacture from "./components/paimentFacture/PaimentFacture";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Stack = createStackNavigator();
export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="PaimentFacture"
          component={PaimentFacture}
          options={{ title: "Paiement de facture", headerLeft: null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
