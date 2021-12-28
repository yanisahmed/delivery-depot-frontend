import { Avatar, Button, Checkbox, FormControlLabel, FormGroup, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box } from '@mui/system';
import { useForm, Controller } from "react-hook-form";

const Signup = () => {

    const { control, handleSubmit } = useForm({
        defaultValues: {
            email: '',
            firstname: '',
            lastname: '',
            password: '',
            checkbox: true
        }
    });
    const onSubmit = data => console.log(data);

    const paperStyle = { padding: 20, height: '80vh', width: 300, margin: '20px auto' }

    return (
        <Grid>
            <Paper elevation={2} style={paperStyle}>
                <Grid align="center">
                    <Avatar><LockOutlinedIcon /></Avatar>
                    <h2>Sign Up</h2>
                </Grid>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => <TextField {...field} sx={{ mb: 2 }} fullWidth required label="Email" variant="standard" />}
                    />
                    <Controller
                        name="firstname"
                        control={control}
                        render={({ field }) => <TextField {...field} sx={{ mb: 2 }} fullWidth required label="First Name" variant="standard" />}
                    />
                    <Controller
                        name="lastname"
                        control={control}
                        render={({ field }) => <TextField {...field} sx={{ mb: 2 }} fullWidth required label="Last Name" variant="standard" />}
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
                    <Button type="Submit" variant="contained" fullWidth >Sign Up </Button>
                    <Box>
                        <Typography sx={{ mt: 2, cursor: 'pointer' }}>
                            <Link to="#">Forget Password?</Link>
                        </Typography>
                        <Typography >Do you have an account? <Link to="#">Sign Up</Link></Typography>
                    </Box>
                </form>


            </Paper>
        </Grid>
    );
};

export default Signup;