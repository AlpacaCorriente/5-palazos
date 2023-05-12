import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Icon} from "react-native-elements"
import {RestaurantStack} from "./RestaurantStack"
import {screen} from "../utils"

import { FavoritesScreen } from "../screens/FavoritesScreen";
import { RankingScreen } from "../screens/RankingScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { AccountScreen } from "../screens/AccountScreen";



// Pantalla en donde está el la barra de navegación inferior
const Tab = createBottomTabNavigator();

export function AppNavigation(){
    return(
      <Tab.Navigator 
        screenOptions={({route}) => ({
            tabBarActiveTintColor:"#00a680",
            tabBarInactiveTintColor:"#646464",
            tabBarIcon: ({ color, size}) => screenIconOptions(route, color, size),
            headerShown: false
        })

        }>
         <Tab.Screen 
            name={screen.restaurant.tab} 
            component = {RestaurantStack}
            options = {{title: "Restaurantes"}}
          /> 
         <Tab.Screen 
            name={screen.favorites.tab} 
            component = {FavoritesScreen}
            options = {{title: "Favoritos"}}
          /> 
         <Tab.Screen 
            name={screen.ranking.tab} 
            component = {RankingScreen}
            options = {{title: "Ranking"}}
          /> 
         <Tab.Screen 
            name={screen.search.tab} 
            component = {SearchScreen}
            options = {{title: "Buscar"}}
          /> 
         <Tab.Screen 
            name={screen.account.tab} 
            component = {AccountScreen}
            options = {{title: "Cuenta"}}
          /> 
         
      </Tab.Navigator>
    )
}

function screenIconOptions(route, color, size){
  let iconName;
  if(route.name === screen.restaurant.tab){
    iconName = "explore";
  }
  if(route.name === screen.favorites.tab ){
    iconName = "favorite";
  }
  if(route.name === screen.ranking.tab ){
    iconName = "star-outline";
  }
  if(route.name === screen.search.tab ){
    iconName = "search";
  }
  if(route.name === screen.account.tab ){
    iconName = "home";
  }
  return(
    <Icon type = "material-comunity" name = {iconName} color = {color} size= {size}/>

  )
}