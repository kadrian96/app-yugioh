import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { getTypeColor } from '../utils/Races'
import { YugiCardprops } from '../utils/Api-prop';


export default function YugiohCard({card}:{card:YugiCardprops}) {
    const navigation = useNavigation<any>();
  return (
    <TouchableOpacity 
        style={[styles.container , {backgroundColor: getTypeColor(card.race)}]} 
        onPress={()=>navigation.navigate('Detail',card.id)}>
     
      <Image 
        style={styles.img}
        source={{uri:card.card_images[0].image_url_small}}/>
        <View style={styles.propview}>
        <View style={styles.prop}>
            <Text style={[styles.keybox,{backgroundColor:'#0000ff'}]}> type </Text> 
            <Text style={styles.value}>{card.type}</Text> 
          </View>
          <View style={styles.prop}>
            <Text style={[styles.keybox,{backgroundColor:'rgb(242,13,94)'}]}> race </Text> 
            <Text style={styles.value}>{card.race}</Text> 
          </View>
          {card.archetype &&(
              <View style={styles.prop}>
              <Text style={[styles.keybox,{backgroundColor:'rgb(145,26,230)'}]}> archetype </Text> 
              <Text style={styles.value}>{card.archetype}</Text> 
            </View>
          )}
          
        </View>
        
        
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:8,
        alignItems:'center',
        width:180,
        height:310,
        borderRadius:5,
        margin:8
    },
    value:{
        fontWeight:'bold',
        fontSize:13,
        color:"white"
    }
    ,
    img:{
        width:150,
        height:220,
    },
    propview:{
      justifyContent:"flex-start",
      width:180, 
      paddingLeft:8
    },
    prop:{
      flexDirection:'row', 
      marginTop:5
    },
    keybox:{
      borderRadius:5, 
      marginRight:5,
      color:"white",
      fontSize:12,
      fontWeight:"bold"
    }
        
})