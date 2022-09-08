import React from 'react';
import Header from '../components/Header';
import TeamBlock from '../components/TeamBlock';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Stack from '@mui/material/Stack';
import exec1 from '../assets/yhmflogo.png';

const Team = () => {
  return (
    <Stack align="center" spacing={10}>
      <Header title="MEET THE TEAM!"/>
      <Stack>
        <TeamBlock
          role="President"
          name="Danny Yang"
          email="yyfdanny1028@gmail.com"
          cell="778-322-1028"
          image={exec1}
        />
        <TeamBlock
          role="Vice-President"
          name="Raymond Zou"
          email="raymondzou0101@gmail.com"
          cell="778-552-0298"
          image={exec1}
        />
        <TeamBlock
          role="Outreach Executives and Tech Executive"
          name="Alex Guo (Outreach and Tech Executive)"
          email="alexlguo18@gmail.com"
          cell="778-899-8928"
          image={exec1}
        />
        <TeamBlock
          role="Event Executives"
          name="Amy Zhang"
          email="amyzhangzyh@gmail.com"
          cell="604-710-5958"
          image={exec1}
        />
        <TeamBlock
          role="Media Executives"
          name="Lucy Wang"
          email="lucyw0628@gmail.com"
          cell="778-554-0628"
          image={exec1}
        />
        <TeamBlock
          role="Marketing Executive"
          name="Winston Zhou"
          email="tastegood09@gmail.com"
          cell="604-782-6081"
          image={exec1}
        />
      </Stack>
      <Stack align="center">
        <Newsletter/>
        <Footer/>
      </Stack>
    </Stack>
  );
}

export default Team;