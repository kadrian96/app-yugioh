import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { YugiCardprops } from '../utils/Api-prop';

export default function Search() {
  const [searchArch, setsearchArch] = useState("");
  const [notfoundCard, setnotfoundCard] = useState(false);
  const navigation = useNavigation<any>();
  const [loading, setLoading] = useState(false);
  const API_YUGIOH_ARCH='https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype='
  const [cardInfo, setcardInfo] = useState<YugiCardprops[]>([])
 

    const fetchData = async (arch:string) => {
      setLoading(true); // Establecer el estado de carga a true
      try {
        const response = await fetch(API_YUGIOH_ARCH+arch);
        if (response.ok) {
          const jsonData = await response.json();
          setcardInfo(jsonData.data);
          navigation.navigate('Archetypes',arch)
        } else {
          setcardInfo([]);
          setsearchArch(arch);
          setnotfoundCard(true);
        }
      } catch (error) {
        console.error('Error al realizar la solicitud:', error);
        setcardInfo([]);
      } finally {
        setLoading(false); // Establecer el estado de carga a false
      }
    };
  
    //Funcion de busqueda por archetipo
    const handleSearch = async (arch:string) => {
      await fetchData(arch);
      
    };
  
  return (
    <View>
      <View style={styles.searchSection}>
       <MaterialIcons style={styles.searchIcon} name="search" size={20} color="#000"/>
        <TextInput
          style={styles.input}
          placeholder="Search cards by Archetype 'Ex: Crystron, ABC, Alien' "
          placeholderTextColor={"black"}
          onSubmitEditing={({nativeEvent}) => {(handleSearch(nativeEvent.text))}}
        />
      </View>
      {notfoundCard && (
      <Text style={styles.text}>Not results found for {searchArch}</Text>
      )}
      {loading && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          )}

    </View>
    
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center'
  },
  searchSection: {
    marginTop:10,
    marginHorizontal:10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius:10
    
},
searchIcon: {
    padding: 10,
},
input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
    borderRadius:10
},
loadingContainer: {
  ...StyleSheet.absoluteFillObject, 
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  justifyContent: 'center',
  alignItems: 'center',
},
text:{
  marginTop:300,
  textAlign:'center',
  fontSize:25,
  fontWeight:'bold',
  color:'#a9a9a9'

}
})