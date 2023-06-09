import React, {useState} from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import { getAuth, signOut } from 'firebase/auth'
import {LoadingModal} from "../../../components/Shared/LoadingModal"
import {InfoUser, AccountOptions}  from "../../../components/Account"
import {styles} from "./UserLoggedScreen.styles"

export function UserLoggedScreen() {
    const [loading, setLoading] = useState(false)
    const [loadingText, setLoadingText] = useState(true)

    const logout = async ( ) => {
        const auth = getAuth();
        await signOut (auth);
    }

  return (
    <View style= {styles.content} >
      <InfoUser setLoading= { setLoading} setLoadingText = {setLoadingText} />

      <AccountOptions/>

      <Button 
        title = "cerrar sesión"
        buttonStyle = {styles.btnStyles}
        titleStyle = { styles.btnTextStyle}
        onPress={logout}/>

      <LoadingModal show={loading} text={loadingText} />

    </View>

    

    
  )
}