import { Avatar, Button, Checkbox, FormControlLabel, FormGroup, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box } from '@mui/system';
import { useForm, Controller } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { signInUsingEmail, singInUsingGoogle, loginError, isLoading } = useAuth();
    const { control, handleSubmit } = useForm({
        defaultValues: {
            email: '',
            password: '',
            checkbox: true
        }
    });

    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        singInUsingGoogle(location, navigate);

    }

    const onSubmit = data => {
        const { email, password } = data;
        console.log(data);
        signInUsingEmail(email, password, location, navigate);

    }
    const paperStyle = { padding: 20, height: '70vh', width: 300, margin: '20px auto' }
    return (
        <Grid>
            <Paper elevation={2} style={paperStyle}>
                <Grid align="center">
                    <Avatar><LockOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => <TextField {...field} sx={{ mb: 2 }} fullWidth required label="Email" variant="standard" />}
                    />


                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => <TextField {...field} sx={{ mb: 2 }} fullWidth required label="Password" variant="standard" />}
                    />

                    <Controller
                        name="checkbox"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <FormGroup>
                            <FormControlLabel control={<Checkbox {...field} defaultChecked />} label="Remember Me" />
                        </FormGroup>}
                    />
                    <Button type="Submit" variant="contained" fullWidth >Sign In</Button>
                    <Box>
                        <Typography sx={{ mt: 2, cursor: 'pointer' }}>
                            <Link to="#">Forget Password?</Link>
                        </Typography>
                        <Typography >Don't you have an account? <Link to="#">Sign Up</Link></Typography>
                    </Box>
                </form>

            </Paper>
        </Grid>
    );
};

export default Login;