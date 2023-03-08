import React from 'react';
import NavBar from './NavBar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { StyleSheet, Text, View, Image } from "react-native";

const Header = (props) => {
  return (
    <View>
      <Box sx={{ backgroundColor: 'black' }}>
        <NavBar iconColor="primary"/>
      </Box>

      <Box sx={{ minHeight: 550 }}>
        <Image source={props.image} style={styles.image}/>
        <Stack alignItems="center">
            <Text style={styles.text}>
              {props.title}
            </Text>
            <Button
              href="https://docs.google.com/forms/d/e/1FAIpQLSdHH-zFVSJJZoc1TrcYkIfoQ4vKUex1eXdPuFDzwJ-jXxqzvw/viewform"
              target="_blank"
              variant="contained"
              style={styles.button}
            >
              Get Involved!
            </Button>
        </Stack>
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 60,
    lineHeight: 250,
    letterSpacing: 6,
    fontWeight: "bold",
    textAlign: "center",
    flexDirection: "column",
    position: "relative",
  },
  button: {
    borderRadius: 10,
    minWidth: 260,
    minHeight: 80,
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "black",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "90%",
    position: "absolute",
},
});

export default Header;