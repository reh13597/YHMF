import React from 'react';
import AppBar from './AppBar';
import Button from '@mui/material/Button';
import image from '../assets/yhmfexecs.jpg';
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <AppBar />
        <Text style={styles.text}>
          YOUTH HUNGER MISSION FOUNDATION
          <Button variant="contained">Get Involved!</Button>  
        </Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 60,
    lineHeight: 350 ,
    letterSpacing: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Header;