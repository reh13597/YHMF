import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { View, Image, StyleSheet } from 'react-native';
import logo from '../assets/yhmflogo.png';

export default function AppBarItems() {
  const [btnColor, setBtnColor] = React.useState('#7F95D1');

  const highlightBtn = (event, newBtnColor) => {
    setBtnColor(newBtnColor);
  };

  const styles = StyleSheet.create({
    logo: {
      width: 150,
      height: 150,
    },
  });

  return (
    <Box sx={{flexGrow: 1,}}>
      <AppBar id='appBar' className='appBar' position="static" >
        <Toolbar>

          {/* <Router>
            <SideBar/>
            <Routes>
            </Routes>
          </Router> */}

          <Image
            style={styles.logo}
            source={logo}
          >
          </Image>
          
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <ToggleButtonGroup
            value={btnColor}
            exclusive
            onChange={highlightBtn}
          >
            <ToggleButton value="left" aria-label="left aligned">
              <Typography
                variant="h7"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'block' } }}
                style={{color: 'white', letterSpacing: 3}}
              >
                Home
              </Typography>
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered">
              <Typography
                variant="h7"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'block' } }}
                style={{color: 'white', letterSpacing: 3}}
              >
                The Team
              </Typography>
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned">
              <Typography
                variant="h7"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'block' } }}
                style={{color: 'white', letterSpacing: 3}}
              >
                Events
              </Typography>
            </ToggleButton>
            <ToggleButton value="justify" aria-label="justified">
              <Typography
                variant="h7"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'block' } }}
                style={{color: 'white', letterSpacing: 3}}
              >
                Contact
              </Typography>
            </ToggleButton>
          </ToggleButtonGroup>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

