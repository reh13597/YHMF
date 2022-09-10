import React from 'react';
import Typography from '@mui/material/Typography';

const TeamRole = (props) => {
    return (
        <Typography variant="h4" style={{ letterSpacing: 1.5, fontWeight:"bold" }} gutterBottom>
            {props.role}
        </Typography>
    );
}

export default TeamRole;