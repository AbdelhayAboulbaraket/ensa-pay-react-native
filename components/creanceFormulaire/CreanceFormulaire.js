import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "../login/style";

export default function CreanceFormulaire({ route, navigation }) {
  const { service, form, creance } = route.params;
  return (
    <View style={styles.loginScreenContainer}>
      <View style={styles.loginFormView}>
        <Text style={styles.logoText}>
          {service} - {creance}{" "}
        </Text>
        {form.champs.map((creaItem, creaIndex) => (
          <TextInput
            key={creaIndex}
            placeholder={creaItem.nom}
            placeholderColor="#c4c3cb"
            style={styles.loginFormTextInput}
          />
        ))}

        <TouchableOpacity
          style={{
            alignItems: "center",
            backgroundColor: "#5c97bf",
            marginRight: 10,
            padding: 10,
          }}
          onPress={() => {
            alert("bssehtk tkhwira");
          }}
        >
          <Text style={{ color: "white" }}>Payer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
