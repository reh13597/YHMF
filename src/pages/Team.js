import React from 'react';
import Header from '../components/Header';
import TeamBlock from '../components/TeamBlock';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Stack from '@mui/material/Stack';

const Team = () => {
  return (
    <Stack align="center" spacing={10}>
      <Header title="MEET THE TEAM!"/>
      <Stack>
        <TeamBlock/>
      </Stack>
      <Stack align="center">
        <Newsletter/>
        <Footer/>
      </Stack>
    </Stack>
  );
}

export default Team;