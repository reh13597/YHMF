import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import React from 'react';
import { StyleSheet } from "react-native";


const ContactForm = () => {
    return (
        <Stack align="center" spacing={5}>
            <Stack direction="row" spacing={5}>
                <TextField
                    required
                    id="filled-required"
                    label="First Name"
                    defaultValue=""
                    variant="filled"
                />
                <TextField
                    required
                    id="filled-required"
                    label="Last Name"
                    defaultValue=""
                    variant="filled"
                />
            </Stack>
                <TextField
                    required
                    id="filled-required"
                    label="Email"
                    defaultValue=""
                    variant="filled"
                />
                <TextField
                    required
                    id="filled-multiline-static"
                    label="Message"
                    multiline
                    rows={6}
                    defaultValue=""
                    variant="filled"
                />
                <Button variant="contained" style={styles.button}>Send</Button>
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

export default ContactForm;