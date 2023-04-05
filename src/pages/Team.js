import React from 'react';
import Header from '../components/Header';
import TeamBlock from '../components/TeamBlock';
import Newsletter from '../components/NewsletterForm';
import Footer from '../components/Footer';
import Stack from '@mui/material/Stack';
import teamPage from '../assets/teamPage.JPG';

const Team = () => {
  return (
    <Stack align="center" spacing={30}>
      <Header image={teamPage} title="MEET THE TEAM!"/>
      <TeamBlock/>
      <Stack align="center">
        <Newsletter/>
        <Footer/>
      </Stack>
    </Stack>
  );
}

export default Team;