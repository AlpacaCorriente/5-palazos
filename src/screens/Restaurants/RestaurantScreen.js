import React from "react";
import {View,Text} from "react-native";
import { Button } from "react-native-elements";
import {screen} from "../../utils"


export function RestaurantsScreen(props){
    
    const {navigation}  = props;

    const goToAddRestaurant = () => {
        console.log("Redirect A la creación de restaurante")
        navigation.navigate(screen.restaurant.addRestaurant);
    }

    return (
    <View>

        <Text>
            Pantalla de restaurantes 
        </Text>

        <Button title= "Crear restaurante" onPress={goToAddRestaurant}/>

    </View>
    );
}
