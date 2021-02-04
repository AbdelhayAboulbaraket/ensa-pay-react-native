import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import axios from "axios";

import styles from "./style";
import {
  Keyboard,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { Button } from "react-native-elements";

function LoginScreen({ navigation }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
    // navigation.navigate("PaimentFacture");

    
    let authString = "Basic " + btoa(login + ":" + password);
    axios
      .get("http://192.168.1.95:8082/client/" + login, {
        headers: { authorization: authString },
      })
      .then((response) => {
        console.log(response);
        if (typeof response.data == "object") {
          navigation.navigate("PaimentFacture");
        } else {
          alert("Mot de passe erroné !");
        }
      })
      .catch((error) => {
        alert("Mot de passe erroné !");
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>
            <View style={styles.loginFormView}>
              <Text style={styles.logoText}>Ensa Pay</Text>
              <TextInput
                placeholder="Username"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                value={login}
                onChangeText={(v) => setLogin(v)}
              />
              <TextInput
                placeholder="Password"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                secureTextEntry={true}
                value={password}
                onChangeText={(v) => setPassword(v)}
              />
              <Button
                buttonStyle={styles.loginButton}
                onPress={loginUser}
                title="Login"
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
}
export default LoginScreen;
