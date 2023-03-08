import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Image, StyleSheet } from 'react-native';
import logo from '../assets/yhmflogo.png';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from '@mui/material/Stack';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const NavBar = (props) => {
  const navigate = useNavigate();

  const styles = StyleSheet.create({
    logo: {
      minWidth: 220,
      minHeight: 220,
    },
    button: {
      minWidth: 150,
      minHeight: 75,
      fontSize: 18,
    }
  });

  const theme = createTheme({
    palette: {
      primary: {
        main: '#EDF2F4',
      },
      secondary: {
        main: '#000000',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar id='navBar' position="static">
      <Toolbar>
        <Box sx={{ paddingBottom: 1.5 }}>
          <a href="/">
            <Image style={styles.logo} source={logo}/>
          </a>
        </Box>

        <Box sx={{ flexGrow: 1 }}/>
          <Stack direction="row" spacing={2}>
            <ButtonGroup variant="outlined" size="large" color={props.navColor} aria-label="outlined button group">
              <Button onClick={() => navigate("/")} style={styles.button}>
                Home
              </Button>
              <Button onClick={() => navigate("/events")} style={styles.button}>
                Events
              </Button>
              <Button onClick={() => navigate("/team")} style={styles.button}>
                The Team
              </Button>
              <Button onClick={() => navigate("/contact")} style={styles.button}>
                Contact
              </Button>
            </ButtonGroup>
            <Box sx={{ paddingTop: 0.3 }}>
              <IconButton href="https://www.instagram.com/yhmfsociety/" target="_blank">
                <InstagramIcon
                  sx={{ fontSize: 50 }}
                  color={props.iconColor}
                />
              </IconButton>
            </Box>
          </Stack>
      </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default NavBar;

