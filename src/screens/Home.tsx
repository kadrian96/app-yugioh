//import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import YugiohCard from "../components/YugiohCard";
import { YugiCardprops } from "../utils/Api-prop";

export function Home() {
  const [cards, setcards] = useState<YugiCardprops[]>([]);
  const API_YUGIOH = "https://db.ygoprodeck.com/api/v7/cardinfo.php";
  useEffect(() => {
    fetch(API_YUGIOH)
      .then((response) => response.json()) //peticion
      .then((data) => {
        const filteredData = data.data.filter(
          (object: YugiCardprops) => !object.banlist_info
        );
        setcards(filteredData);//guarda informacion
      }) 
      .catch((error) => console.log(error)); //captura el error si esq lo hubiere
  }, []);
  const renderItem=({ item }:{ item:YugiCardprops}) => (<YugiohCard card={item} />);
  const keyExtractor=(item:YugiCardprops) => item.name;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cards}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        numColumns={2}
        initialNumToRender={20}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
