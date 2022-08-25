import React from 'react';
import Header from '../components/Header';
import InfoBlock from '../components/InfoBlock';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Stack from '@mui/material/Stack';

const Home = () => {
  return (
    <Stack align="center" spacing={20}>
      <Header/>
      <InfoBlock/>
      <Stack align="center">
        <Newsletter/>
        <Footer/>
      </Stack>
    </Stack>
  );
}

export default Home;