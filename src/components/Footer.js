import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Image, StyleSheet } from 'react-native';
import logo from '../assets/yhmflogo.png';

const Footer = () => {
    return (
        <Stack align="center" spacing={5}>
            <Box sx={{ backgroundColor: 'black', width: null, height: 400 }}>
                <Image source={logo} style={styles.image}/>
                <Typography color="#EDF2F4" variant="subtitle2" align="center" style={{ letterSpacing: 1.5 }} gutterBottom>
                    © 2022 Youth Hunger Mission Foundation | Website created & designed by Alex Guo
                </Typography>
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

export default Footer;