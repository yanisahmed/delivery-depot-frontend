import { Container, Grid, Paper } from '@mui/material';
import React from 'react';

const MyPercel = () => {
    return (
        <Container maxWidth="sm" sx={{ my: 4 }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Paper sx={{ p: 2 }}>
                        <h2>Percel Info</h2>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper sx={{ p: 2 }}>
                        <h2>Percel Info</h2>
                    </Paper>

                </Grid>
                <Grid item xs={4}>

                    <Paper sx={{ p: 2 }}>
                        <h2>Percel Info</h2>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default MyPercel;