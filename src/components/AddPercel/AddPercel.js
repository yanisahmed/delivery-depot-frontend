import { Avatar, Button, Grid, Paper, TextField } from '@mui/material';
import React from 'react';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { useForm, Controller } from "react-hook-form";

const AddPercel = () => {

    const { control, handleSubmit, reset } = useForm({
        defaultValues: {
            percel_status: 'Pending',
            parcel_info: '',
            parcel_cost: '',
            parcel_starting_location: '',
            parcel_ending_location: '',
            sender_name: '',
            sender_address: '',
            sender_phone: '',
            receiver_name: '',
            receiver_address: '',
            receiver_phone: ''
        }
    });
    const onSubmit = data => {
        // console.log(data);
        fetch('https://enigmatic-beach-77527.herokuapp.com/percels', {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('New percels Added');
                    reset();
                }
            })
    }

    const paperStyle = { padding: 20, minHeight: '80vh', width: 300, margin: '20px auto' }

    return (
        <Grid>
            <Paper elevation={2} style={paperStyle}>
                <Grid align="center">
                    <Avatar><AddCircleOutlinedIcon /></Avatar>
                    <h2>Add New Percel</h2>
                </Grid>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="parcel_info"
                        control={control}
                        render={({ field }) => <TextField {...field} sx={{ mb: 2 }} fullWidth required label="Percel Info" variant="standard" />}
                    />
                    <Controller
                        name="parcel_cost"
                        control={control}
                        render={({ field }) => <TextField {...field} sx={{ mb: 2 }} fullWidth required label="Percel Cost" variant="standard" />}
                    />
                    <Controller
                        name="parcel_starting_location"
                        control={control}
                        render={({ field }) => <TextField {...field} sx={{ mb: 2 }} fullWidth required label="Percel Starting Location" variant="standard" />}
                    />
                    <Controller
                        name="parcel_ending_location"
                        control={control}
                        render={({ field }) => <TextField {...field} sx={{ mb: 2 }} fullWidth required label="Percel ending Location" variant="standard" />}
                    />
                    <Controller
                        name="sender_name"
                        control={control}
                        render={({ field }) => <TextField {...field} sx={{ mb: 2 }} fullWidth required label="Sender Name" variant="standard" />}
                    />
                    <Controller
                        name="sender_address"
                        control={control}
                        render={({ field }) => <TextField {...field} sx={{ mb: 2 }} fullWidth required label="Sender Address" variant="standard" />}
                    />
                    <Controller
                        name="sender_phone"
                        control={control}
                        render={({ field }) => <TextField {...field} sx={{ mb: 2 }} fullWidth required label="Sender Phone" variant="standard" />}
                    />
                    <Controller
                        name="receiver_name"
                        control={control}
                        render={({ field }) => <TextField {...field} sx={{ mb: 2 }} fullWidth required label="Receiver Name" variant="standard" />}
                    />
                    <Controller
                        name="receiver_address"
                        control={control}
                        render={({ field }) => <TextField {...field} sx={{ mb: 2 }} fullWidth required label="Receiver Address" variant="standard" />}
                    />
                    <Controller
                        name="receiver_phone"
                        control={control}
                        render={({ field }) => <TextField {...field} sx={{ mb: 2 }} fullWidth required label="Receiver Phone" variant="standard" />}
                    />

                    <Button type="Submit" variant="contained" fullWidth >Add Percel</Button>

                </form>


            </Paper>
        </Grid>
    );
};

export default AddPercel;