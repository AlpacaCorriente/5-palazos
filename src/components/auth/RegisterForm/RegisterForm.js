import React from 'react'
import { View, Text } from 'react-native'
import {Input, Icon, Button} from 'react-native-elements'
import { styles } from './RegisterForm.style'

export function RegisterForm() {
  return (
    <View styles= {styles.content}>
      <Input 
        placeholder='Correo electronico' 
        containerStyle= {styles.input} 
        rightIcon= {<Icon type='material-community' name='at' iconStyle={styles.icon}/>}
        />
      <Input 
        placeholder='Contraseña' 
        containerStyle= {styles.input} 
        secureTextEntry = {true}
        rightIcon= {<Icon type='material-community' name='eye-outline' iconStyle={styles.icon}/>}
        />

      <Input 
        placeholder='Repetir Contraseña' 
        containerStyle= {styles.input} 
        secureTextEntry = {true}
        rightIcon= {<Icon type='material-community' name='eye-outline' iconStyle={styles.icon}/>}
        />

        <Button 
          title = "Unirse" 
          containerStyle = {styles.btnContainer} 
          buttonStyle= {styles.btn}
          />


    </View>
  )
}