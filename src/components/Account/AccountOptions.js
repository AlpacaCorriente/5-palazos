import React from 'react'
import { View, Text } from 'react-native'
import { Icon, ListItem } from 'react-native-elements';
import {map} from "lodash";

export  function AccountOptions() {
  const menuOptions = getMenuOptions();



  return (
    <View>
      {map(menuOptions, (menu, index)=> (
        <ListItem key = {index} buttomDivider onPress={menu.onPress} >
          <Icon 
            type = {menu.iconType} 
            name = {menu.iconNameLeft} 
            color = {menu.iconColorLeft}/>
          <ListItem.Content>
              <ListItem.Title>
                 {menu.title}
              </ListItem.Title>
          </ListItem.Content>
          <Icon 
            type = {menu.iconType} 
            name = {menu.iconNameRight} 
            color = {menu.iconColorRight}/>
        </ListItem>
      ))}
      
    </View>
  )
}

function getMenuOptions(){
  return[
    {
      title: "Cambiar Nombre y Appellidos",
      iconType: "material-community",
      iconNameLeft: "account-circle",
      iconColorLeft:"#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc"
    },
    {
      title: "Cambiar Email",
      iconType: "material-community",
      iconNameLeft: "at",
      iconColorLeft:"#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc"
    },
    {
      title: "Cambiar contraseña",
      iconType: "material-community",
      iconNameLeft: "lock-reset",
      iconColorLeft:"#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc"
    },

  ];
}