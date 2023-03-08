import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Image, StyleSheet } from 'react-native';

const TeamBlock = (props) => {
    return (
        <Stack alignItems="center" direction="row" spacing={25}>
            <Stack>
                <Box sx={{ minWidth: 500 }}>
                    <Typography variant="h6" align="center" style={{ letterSpacing: 1, fontWeight: "bold", fontStyle: "italic" }} gutterBottom>
                        {props.name}
                    </Typography>
                    <Typography variant="h6" align="center" style={{ letterSpacing: 1, fontStyle: "italic" }} gutterBottom>
                        {props.email}
                    </Typography>
                    <Typography variant="h6" align="center" style={{ letterSpacing: 1, fontStyle: "italic" }} gutterBottom>
                        {props.cell}
                    </Typography>
                </Box>
            </Stack>
            <Image source={props.image} style={styles.image}/>
        </Stack>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 300,
        borderRadius: 20,
    },
  });

export default TeamBlock;