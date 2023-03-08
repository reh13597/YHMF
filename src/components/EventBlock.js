import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Image, StyleSheet } from 'react-native';

const EventBlock = (props) => {
    return (
      <Stack align="center">
        <Box>
          <Typography variant="h4" align="center" style={{ letterSpacing: 1.5 }} gutterBottom>
            {props.title}
          </Typography>
          <Typography variant="h5" align="center" style={{ letterSpacing: 1.5, maxWidth: 580 }} gutterBottom>
            {props.text}
          </Typography>
          <Image source={props.image} style={styles.image}/>
        </Box>
      </Stack>
    );
}

const styles = StyleSheet.create({
  image: {
      width: 350,
      height: 350,
  },
});

export default EventBlock;