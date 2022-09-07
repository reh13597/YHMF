import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import InputAdornment from '@mui/material/InputAdornment';
import React from 'react';
import { StyleSheet } from "react-native";


const Newsletter = () => {
    return (
        <Stack id="newsletter" align="center" spacing={5}>
            <Box sx={{ paddingTop: 4 }}>
                <Typography variant="h3" align="center" style={{ letterSpacing: 1 }} gutterBottom>
                    SUBSCRIBE
                </Typography>
                <Typography variant="subtitle1" align="center" style={{ letterSpacing: 1.5 }} gutterBottom>
                    Sign up with your email address to recieve news and updates.
                </Typography>
            </Box>
            <Box sx={{ paddingBottom: 5 }}>
                <TextField
                    id="input-with-icon-textfield"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                             <EmailIcon/>
                            </InputAdornment>
                        ),
                    }}
                    variant="filled"
                    style={{ paddingRight: 22 }}
                />
                <Button variant="contained" style={styles.button}>Sign Up</Button>
            </Box>
        </Stack>
    );
}

const styles = StyleSheet.create({
    button: {
      borderRadius: 10,
      width: 180,
      height: 55,
      fontSize: 20,
      color: "#e6e6e6",
      backgroundColor: "grey",
    }
});

export default Newsletter;