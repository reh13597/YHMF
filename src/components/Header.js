import React from 'react';
import NavBar from './NavBar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { StyleSheet, Text, View } from "react-native";

const Header = (props) => {
  return (
    <View>
      <Box sx={{ backgroundColor: 'black', width: null, height: 625 }}>
        <NavBar/>
        <Stack alignItems="center">
            <Text style={styles.text}>
              {props.title}
            </Text>
            <Button variant="contained" style={styles.button}>Get Involved!</Button>
        </Stack>
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 50,
    lineHeight: 250,
    letterSpacing: 6,
    fontWeight: "bold",
    textAlign: "center",
    flexDirection: "column",
  },
  button: {
    borderRadius: 10,
    width: 215,
    height: 60,
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "grey",
  }
});

export default Header;