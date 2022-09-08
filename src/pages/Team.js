import React from 'react';
import Header from '../components/Header';
import EventBlock from '../components/EventBlock';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Stack from '@mui/material/Stack';
import exec1 from '../assets/yhmflogo.png';

const Team = () => {
  return (
    <Stack align="center" spacing={20}>
      <Header title="MEET THE TEAM!"/>
      <EventBlock
        title="Krispy Kreme Donut Sale"
        text="wcnmb"
        image={exec1}
      />
      <Stack align="center">
        <Newsletter/>
        <Footer/>
      </Stack>
    </Stack>
  );
}

export default Team;