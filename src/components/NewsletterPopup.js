import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import React from 'react';
import { StyleSheet } from "react-native";

function NewsletterPopup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <Box sx={{ paddingTop: 5 }}>
                    <Button className="close-btn" onClick={() => props.setTrigger(false)} variant="contained" style={styles.button}>THANK YOU!</Button>
                    { props.children }
                </Box>
            </div>
        </div>
    ) : "";
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        width: 180,
        height: 55,
        fontSize: 20,
        letterSpacing: 2,
        color: "#e6e6e6",
        backgroundColor: "grey",
    }
});

export default NewsletterPopup;