import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function AppBarItems() {
  return (
    <Box sx={{flexGrow: 1,}}>
      <AppBar id='appBar' className='appBar' position="static" >
        <Toolbar>
          {/* <Router>
            <SideBar/>
            <Routes>
            </Routes>
          </Router> */}

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
            style={{letterSpacing: 3}}
          >
            YOUTH HUNGER MISSION FOUNDATION
          </Typography>
          
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button variant='text' style={{color: 'white', backgroundColor: '#5A678E', letterSpacing: 2}}>
              Home</Button>
            <Button variant='text' style={{color: 'white', letterSpacing: 2}}>The Team</Button>
            <Button variant='text' style={{color: 'white', letterSpacing: 2}}>Events</Button>
            <Button variant='text' style={{color: 'white', letterSpacing: 2}}>Contact</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

