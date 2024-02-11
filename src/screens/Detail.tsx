import {
  Button,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { YugiCardprops } from "../utils/Api-prop";
import { getTypeAttribute } from "../utils/Attributes";
import { Foundation } from "@expo/vector-icons";

export default function Detail({ route }: any) {
  const cardid: string = route.params;
  const genericimg: string =
    "https://img.freepik.com/vector-gratis/preguntas-frecuentes-signo-interrogacion-fondo-resolucion-problemas_1017-43320.jpg";
  const [cardInfo, setcardInfo] = useState<YugiCardprops>({
    id: 0,
    name: "",
    desc: "",
    atk: 0,
    def: 0,
    level: 0,
    attribute: "",
    card_images: [{ image_url: genericimg, image_url_cropped: genericimg }],
    race: "",
    archetype: "",
    type: "",
  });
  const API_YUGIOH_ID = "https://db.ygoprodeck.com/api/v7/cardinfo.php?id=";
  const [seeCard, setseeCard] = useState(false);
  useEffect(() => {
    fetch(API_YUGIOH_ID + cardid)
      .then((response) => response.json()) //peticion
      .then((data) => setcardInfo(data.data[0])) //guarda informacion
      .catch((error) => console.log(error)); //captura el error si esq lo hubiere
  }, []);

  return (
    <ImageBackground
      style={[styles.container]}
      source={require("../../assets/images/fondo-info.jpg")}
    >
      <Image
        style={styles.img}
        source={{ uri: cardInfo.card_images[0].image_url_cropped }}
      />

      <Text style={styles.name}>{cardInfo.name}</Text>
      <View style={styles.descview}>
        <Text style={[styles.desckeybox, { backgroundColor: "#0000ff" }]}>
          {" "}
          desc:{" "}
        </Text>
        <Text style={styles.descvalue}> {cardInfo.desc}</Text>
      </View>
      {cardInfo.archetype && (
        <View style={styles.archeview}>
          <Text style={[styles.keybox, { backgroundColor: "rgb(145,26,230)" }]}>
            {" "}
            archetype:{" "}
          </Text>
          <Image
            source={require("../../assets/images/archetype-icon.png")}
            style={styles.imgicon}
          />
          <Text style={styles.value}> {cardInfo.archetype}</Text>
        </View>
      )}
      <View style={styles.otherprops}>
        <View style={styles.leftprops}>
          <View style={styles.leftpropsrow1}>
            <Text style={[styles.keybox, { backgroundColor: "#0000ff" }]}>
              {" "}
              type:{" "}
            </Text>
            <Image
              source={require("../../assets/images/card-icon2.png")}
              style={styles.imgicon}
            />
            <Text style={styles.value}> {cardInfo.type}</Text>
          </View>
          <View style={styles.leftpropsrow2}>
            <Text
              style={[styles.keybox, { backgroundColor: "rgb(242,13,94)" }]}
            >
              {" "}
              race:{" "}
            </Text>
            <Image
              source={require("../../assets/images/race-icon.png")}
              style={styles.imgicon}
            />
            <Text style={styles.value}> {cardInfo.race}</Text>
          </View>
          {cardInfo.attribute && (
            <View style={styles.rightpropsrow1}>
              <Text style={[styles.keybox, { backgroundColor: "#448AFF" }]}>
                {" "}
                attribute:{" "}
              </Text>
              <Image
                source={getTypeAttribute(cardInfo.attribute)}
                style={styles.imgicon}
              />
              <Text style={styles.value}> {cardInfo.attribute}</Text>
            </View>
          )}
        </View>
        <View style={styles.rightprops}>
          {cardInfo.atk !== undefined && (
            <View style={styles.rightpropsrow1}>
              <Text style={[styles.keybox, { backgroundColor: "#009900" }]}>
                {" "}
                attack:{" "}
              </Text>
              <Image
                source={require("../../assets/images/attack-icon.png")}
                style={styles.imgicon}
              />
              <Text style={styles.value}> {cardInfo.atk}</Text>
            </View>
          )}
          {cardInfo.def !== undefined && (
            <View style={styles.rightpropsrow1}>
              <Text style={[styles.keybox, { backgroundColor: "#f4ae01" }]}>
                {" "}
                defense:{" "}
              </Text>
              <Image
                source={require("../../assets/images/deff-icon.png")}
                style={styles.imgicon}
              />
              <Text style={styles.value}> {cardInfo.def}</Text>
            </View>
          )}
          {cardInfo.level !== undefined && (
            <View style={styles.rightpropsrow1}>
              <Text style={[styles.keybox, { backgroundColor: "#BF360C" }]}>
                {" "}
                level:{" "}
              </Text>
              <Image
                source={require("../../assets/images/level-icon.png")}
                style={styles.imgicon}
              />
              <Text style={styles.value}> {cardInfo.level}</Text>
            </View>
          )}
        </View>
      </View>
      <Pressable style={styles.btn} onPress={() => setseeCard(true)}>
        <Foundation name="zoom-in" size={24} color="white" />
        <Text style={styles.btntxt}> See the card </Text>
      </Pressable>
      {seeCard && (
        <Modal animationType="slide" transparent={true}>
          <View style={styles.centeredView}>
            <View style={styles.modalcardView}>
              <Image
                source={{ uri: cardInfo.card_images[0].image_url }}
                style={styles.fullcardimg}
              />

              <Button
                title=" Back "
                color={"rgb(64,191,169)"}
                onPress={() => setseeCard(false)}
              />
            </View>
          </View>
        </Modal>
      )}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems:'center',
    resizeMode: "contain",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffd700",
    textAlign: "center",
  },
  img: {
    marginTop: 10,
    width: "100%",
    height: 300,
    resizeMode: "contain",
    marginBottom: 5,
  },
  descview: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 5,
    marginHorizontal: 5,
    paddingHorizontal: 5,
    backgroundColor: "#d8e4e7",
    borderRadius: 5,
    borderColor: "#b86d29",
    borderWidth: 1,
  },
  desckeybox: {
    borderRadius: 5,
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    alignSelf: "flex-start",
    opacity: 0.9,
  },
  descvalue: {
    fontWeight: "bold",
    fontSize: 13,
    marginRight: 30,
  },
  archeview: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10,
    marginLeft:10
  },
  value: {
    fontWeight: "bold",
    fontSize: 13,
    color: "white",
  },
  imgicon: {
    width: 25,
    height: 25,
    marginHorizontal: 5,
  },
  keybox: {
    borderRadius: 5,
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
    opacity: 0.9,
  },
  otherprops: {
    marginTop: 8,
    flexDirection: "row",
  },
  leftprops: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  rightprops: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    marginLeft: 25,
  },

  leftpropsrow1: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  rightpropsrow1: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  leftpropsrow2: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  rightpropsrow2: {
    flexDirection: "row",
  },
  leftpropsrow3: {
    flexDirection: "row",
  },
  rightpropsrow3: {
    flexDirection: "row",
  },
  btn: {
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "rgb(115,140,136)",
    borderRadius: 5,
    paddingHorizontal: 5,
    alignSelf: "center",
    paddingVertical: 5,
  },
  btntxt: {
    fontWeight: "bold",
    color: "white",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalcardView: {
    height: 650,
    width: 350,
    backgroundColor: "",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  fullcardimg: {
    height: 500,
    width: 330,
    resizeMode: "contain",
    marginBottom: 30,
  },
});
