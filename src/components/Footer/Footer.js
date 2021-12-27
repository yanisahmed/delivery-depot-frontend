import { Grid, Link, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Grid align="center">
            <Typography>Developed by <Link sx={{ cursor: "pointer" }} to="yanisahmed.netlify.app">Yanis Ahmed</Link></Typography>
        </Grid>
    );
};

export default Footer;