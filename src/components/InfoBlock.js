import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const InfoBlock = (props) => {
    return (
      <Stack align="center">
        <Box>
          <Typography variant="h2" align="center" style={{ letterSpacing: 1.5 }} gutterBottom>
            {props.title}
          </Typography>
          <Typography variant="subtitle1" align="center" style={{ letterSpacing: 1.5, maxWidth: 580 }} gutterBottom>
            {props.text}
          </Typography>
        </Box>
      </Stack>
    );
  }

  export default InfoBlock;