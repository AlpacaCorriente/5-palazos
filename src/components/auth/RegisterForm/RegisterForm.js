import React, {useState} from 'react'
import { View, Text } from 'react-native'
import {Input, Icon, Button} from 'react-native-elements'
import { styles } from './RegisterForm.style'
import { useFormik } from 'formik'
import  Toast  from 'react-native-toast-message'
import {screen } from "../../../utils"
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import { useNavigation } from '@react-navigation/native'
import { initialValues, validationSchema} from './RegisterForm.data'

export function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false)
    const [showRepeatPassword, setShowRepeatPassword] = useState(false)
    const navigation  = useNavigation()

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue)=> {
          try {
            const auth = getAuth();
            await createUserWithEmailAndPassword(
              auth,
              formValue.email,
              formValue.password
            );
            navigation.navigate(screen.account.account)
          } catch (error) {

            Toast.show({
               type: "error",
               position: "bottom",
               text1: "Error al registrar, intentar más tarde"
            })
            
            console.log(error)
          }
        },
    });

  const showHidenPassword = () => setShowPassword((prevState)=> !prevState);
  const showHidenRepeatPassword = () => setShowRepeatPassword((prevStateRepeat)=> !prevStateRepeat);


  return (
    <View styles= {styles.content}>
      <Input 
        placeholder='Correo electronico' 
        containerStyle= {styles.input} 
        rightIcon= {<Icon type='material-community' name='at' iconStyle={styles.icon}/>}

        onChangeText = {(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}

        />
      <Input 
        placeholder='Contraseña' 
        containerStyle= {styles.input} 
        secureTextEntry = { showPassword ? false: true}
        rightIcon= {
            <Icon 
              type='material-community' 
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              iconStyle={styles.icon}
              onPress={ showHidenPassword}
            />}
        onChangeText = {(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
        />

      <Input 
        placeholder='Repetir Contraseña' 
        containerStyle= {styles.input} 
        secureTextEntry = { showRepeatPassword ? false: true}
        rightIcon= {
              <Icon 
                type='material-community' 
                name={showRepeatPassword ? "eye-off-outline" : "eye-outline"}
                iconStyle={styles.icon}
                onPress={ showHidenRepeatPassword}
              
              />}
        onChangeText = {(text) => formik.setFieldValue("repeatPassword", text)}
        errorMessage={formik.errors.repeatPassword}

        />

        <Button 
          title = "Unirse" 
          containerStyle = {styles.btnContainer} 
          buttonStyle= {styles.btn}
          onPress={ formik.handleSubmit}
          loading = {formik.isSubmitting}
          />


    </View>
  )
}