import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Image, StyleSheet } from 'react-native';
import logo from '../assets/yhmflogo.png';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const NavBar = () => {
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
        <Image
          style={styles.logo}
          source={logo}
        >
        </Image>

        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <ButtonGroup size="large" color="primary" aria-label="text button group">
            <Button>Home</Button>
            <Button>Events</Button>
            <Button>The Team</Button>
            <Button>Contact</Button>
          </ButtonGroup>
        </Box>
      </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default NavBar;

