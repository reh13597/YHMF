import React from 'react';
import ContactBlock from '../components/ContactBlock';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import ContactForm from '../components/ContactForm';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const Contact = () => {
  return (
    <Stack align="center" spacing={10}>
      <NavBar navColor="secondary" iconColor="secondary"/>
      <Stack alignItems="center">
        <Stack direction="row" spacing={30}>
          <Stack spacing={5}>
            <Typography variant="h4" align="left" style={{ letterSpacing: 1, fontWeight: "bold" }} gutterBottom>
              CONTACT US!
            </Typography>
            <ContactBlock
              title="General Inquiries"
              text="yhmfcanada@gmail.com"
            />
            <ContactBlock
              title="Danny Yang | President"
              text="yyfdanny1028@gmail.com"
            />
            <ContactBlock
              title="Raymond Zou | Vice-President"
              text="raymondzou0101@gmail.com"
            />
            <ContactBlock
              title="Alex Guo | Outreach & Tech Executive"
              text="alexlguo18@gmail.com"
            />
          </Stack>
          <ContactForm/>
        </Stack>
      </Stack>
      <Stack align="center">
        <Newsletter/>
        <Footer/>
      </Stack>
    </Stack>
  );
}

export default Contact;