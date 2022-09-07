import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Image, StyleSheet } from 'react-native';
import logo from '../assets/yhmflogo.png';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  
  const styles = StyleSheet.create({
    logo: {
      width: 150,
      height: 150,
    },
  });

  const theme = createTheme({
    palette: {
      primary: {
        main: '#EDF2F4',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar id='navBar' position="static" >
      <Toolbar>
        <Image style={styles.logo} source={logo}/>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <ButtonGroup size="large" color="primary" aria-label="text button group">
            <Button onClick={() => navigate("/")}>
              Home
            </Button>
            <Button onClick={() => navigate("/events")}>
              Events
            </Button>
            <Button onClick={() => navigate("/team")}>
              The Team
            </Button>
            <Button onClick={() => navigate("/contact")}>
              Contact
            </Button>
          </ButtonGroup>
        </Box>
      </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default NavBar;

