import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
} from "react-native";
import styles from "../login/style";
import Modal from "react-native-modal";

export default function CreanceFormulaire({ route, navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const { service, form, creance } = route.params;

  return (
    <View style={styles.loginScreenContainer}>
      <Modal
        isVisible={isModalVisible}
        style={styles.modal}
        swipeDirection="left"
      >
        <Image
          source={require("../../assets/success.png")}
          style={{ width: 200, height: 200 }}
        />
        <View style={{ flex: 1 }}>
          <Text>Paiement confirmé !</Text>
          <Button
            title="Retour"
            onPress={() => {
              navigation.navigate("PaimentFacture");
            }}
          />
        </View>
      </Modal>
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
            setModalVisible(!isModalVisible);
          }}
        >
          <Text style={{ color: "white" }}>Payer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
