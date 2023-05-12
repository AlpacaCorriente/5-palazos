import React from 'react'
import { View, ScrollView } from 'react-native'
import { Text, Button, Image} from 'react-native-elements'
import {styles} from "./UserGuestScreen.styles"
import { useNavigation } from '@react-navigation/native'
import { screen } from '../../../utils'

export function UserGuestScreen() {
  const navigation  = useNavigation();

  const goToLogin = () => {
      navigation.navigate(screen.account.login)
  };

  return (
   <ScrollView  
      centerContent= {true} 
      style = {styles.content}
      >
    <Image 
      source={require("../../../../assets/img/user-guest.png")}
      style = {styles.image}

    />
    <Text style= {styles.title}> Consultar el perfil de la app </Text>

    <Text style= {styles.description}> ¿Cual es la mejor descripción para tu restaurante? Busca y visualiza los mejores restaurantes de una forma sencilla, vota cual te ha gustado más y comenta como ha sido la experiencia</Text>

    <View>
        <Button 
          title = "Ver perfil" 
          onPress={goToLogin} 
          buttonStyle = {styles.btnStyle}/>
    </View>
   </ScrollView>
  )
}