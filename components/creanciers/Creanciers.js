import React, { useState } from "react";
import {
  Keyboard,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import styles from "./style";
import { Card, Icon, Text } from "react-native-elements";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Left,
  Body,
  Right,
} from "native-base";

export default function Creanciers({ navigation }) {
  const services = require("../../data/data").default;
  const creancierListItem = () => {
    const [isShowing, setIsShowing] = useState(true);
    const toggleShow = (value) => {
      setIsShowing(!value);
    };
    return services.map((item, index) => (
      <ListItem thumbnail key={index} onPress={() => toggleShow(isShowing)}>
        <Left>
          <Thumbnail
            large
            source={{
              uri: item.avatar,
            }}
            style={{ resizeMode: "contain" }}
          />
        </Left>
        <Body>
          <Text style={{ fontWeight: "bold" }}>{item.nom}</Text>
          <Text style={{ fontStyle: "italic" }}>
            Catégorie : {item.categorie}
          </Text>
          <Text style={{ display: isShowing == true ? "flex" : "none" }}>
            {item.creances.map((creaItem, creaIndex) => (
              <View key={creaIndex}>
                <TouchableOpacity
                  style={{
                    alignItems: "center",
                    backgroundColor: "#5c97bf",
                    marginRight: 10,
                    marginTop: 10,
                    padding: 10,
                    borderRadius: 10,
                  }}
                  onPress={() => {
                    navigation.navigate("CreanceFormulaire", {
                      service: item.nom,
                      creance: creaItem.nom,
                      form: creaItem.formulaire,
                    });
                  }}
                >
                  <Text style={{ color: "white" }}>{creaItem.nom}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </Text>
        </Body>
        <Right></Right>
      </ListItem>
    ));
  };

  return (
    <Container>
      <Content>
        <List>{creancierListItem()}</List>
      </Content>
    </Container>
  );
}
