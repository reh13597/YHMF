import React from 'react';
import Header from '../components/Header';
import TeamBlock from '../components/TeamBlock';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Stack from '@mui/material/Stack';
import team from '../assets/team.png';

const Team = () => {
  return (
    <Stack align="center" spacing={30}>
      <Header image={team} title="MEET THE TEAM!"/>
      <TeamBlock/>
      <Stack align="center">
        <Newsletter/>
        <Footer/>
      </Stack>
    </Stack>
  );
}

export default Team;