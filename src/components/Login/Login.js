import { Avatar, Button, Checkbox, FormControlLabel, FormGroup, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box } from '@mui/system';

const Login = () => {
    const paperStyle = { padding: 20, height: '70vh', width: 300, margin: '20px auto' }
    return (
        <Grid>
            <Paper elevation={2} style={paperStyle}>
                <Grid align="center">
                    <Avatar><LockOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField fullWidth required label="Username" variant="standard" />
                <TextField fullWidth required label="password" type="password" variant="standard" />
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
                </FormGroup>
                <Button type="Submit" variant="contained" fullWidth >Sign In </Button>
                <Box>
                    <Typography sx={{ mt: 2, cursor: 'pointer' }}>
                        <Link to="#">Forget Password?</Link>
                    </Typography>
                    <Typography >Do you have an account? <Link to="#">Sign Up</Link></Typography>
                </Box>


            </Paper>
        </Grid>
    );
};

export default Login;