import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const InfoBlock = () => {
    return (
      <Stack align="center" spacing={20}>
        <Box>
          <Typography variant="h2" align="center" style={{ letterSpacing: 1.5 }} gutterBottom>
            About Us
          </Typography>
          <Typography variant="subtitle1" align="center" style={{ letterSpacing: 1.5, maxWidth: 580 }} gutterBottom>
            YHMF (Youth Hunger Mission Foundation) is a student-run, not for profit organization in Vancouver, British Columbia.
            Founded in 2014, YHMF has been working towards greater social and equality change through a medium of hosting fundraising events to raise awareness and aid at-risk youth.
            Although we have been operating on a local scale since our founding, we wish to progress to a provincial, or even a national scale.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h2" align="center" style={{ letterSpacing: 1.5 }} gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="subtitle1" align="center" style={{ letterSpacing: 1.5, maxWidth: 580 }} gutterBottom>
            Our goal at YHMF is to raise awareness and funds to support at-risk youth in the Greater Vancouver area.
            At-risk youth include those who are living in poverty, fleeing abuse, dealing with mental health issues, vulnerable to exploitation, or living on the street.
            1 in every 5 children in BC are living in poverty. Our mission is to inspire people to help marginalized youth who face barriers to wellness and opportunity.
            We raise funds through various means to donate to charities such as Covenant House Vancouver, the Surrey Food Bank, Nightshift, Street Ministries,
            Youth Unlimited, and other charities that assist homeless and disenfranchised youth.
          </Typography>
        </Box>
      </Stack>
    );
  }

  export default InfoBlock;