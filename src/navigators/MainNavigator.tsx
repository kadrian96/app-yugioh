import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { NavigationContainer } from "@react-navigation/native"; 
import Detail from "../screens/Detail";
import Search from "../screens/Search";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import MatchedArch from "../screens/MatchedArch";

const Stack=createStackNavigator();

function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen 
            name="Home" 
            component={Home}
            options={({ navigation })=>({
                headerTitle:'Yu-Gi-Oh! Cards',
                headerStyle: {
                    backgroundColor: '#f4511e',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontFamily:"serif",
                    fontWeight: 'bold',
                    fontSize:23
                  },
                headerRight:() => (
                    <TouchableOpacity onPress={()=> navigation.navigate('Search')}>
                        <MaterialIcons name="search" color="white" size={32}/>
                    </TouchableOpacity>
                ),
                headerRightContainerStyle:{
                  marginRight:10
                }
            })}   
         />
        <Stack.Screen 
          name="Detail" 
          component={Detail}
          options={{
            headerTitle:'Yu-Gi-Oh! Card Info',
            headerTitleAlign:'center',
            headerStyle: {
              backgroundColor: '#003aff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily:"serif",
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Group screenOptions={{presentation:'modal'}}>
        <Stack.Screen name="Search" component={Search} />
        </Stack.Group>

        <Stack.Screen 
            name="Archetypes" 
            component={MatchedArch}
            options={({ navigation })=>({
                headerTitle:'Archtypes',
                headerStyle: {
                    backgroundColor: 'rgb(51,204,123)',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontFamily:"serif",
                    fontWeight: 'bold',
                    fontSize:23
                  },
                headerRight:() => (
                    <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
                        <MaterialIcons name="home" color="white" size={32}/>
                    </TouchableOpacity>
                ),
                headerRightContainerStyle:{
                  marginRight:10
                }
            })}   
         />

        
        
      </Stack.Navigator>
    );
  }

export function StackNavigator(){
        return(
            <NavigationContainer>
                <MyStack/>
            </NavigationContainer>
        )
        
}