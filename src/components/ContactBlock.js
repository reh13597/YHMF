import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ContactBlock = (props) => {
    return (
      <Stack align="center">
        <Box>
          <Typography variant="subtitle1" align="left" style={{ letterSpacing: 0.8, fontWeight: "bold" }} gutterBottom>
            {props.title}
          </Typography>
          <Typography variant="subtitle1" align="left" style={{ letterSpacing: 1.5, maxWidth: 580 }} gutterBottom>
            {props.text}
          </Typography>
        </Box>
      </Stack>
    );
  }

  export default ContactBlock;