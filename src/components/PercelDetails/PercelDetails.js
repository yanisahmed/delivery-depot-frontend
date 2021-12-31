import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import { Button } from '@mui/material';

const PercelDetails = () => {
    const { id } = useParams();
    const url = `https://enigmatic-beach-77527.herokuapp.com/percels/${id}`;
    const [item, setItem] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItem(data);
                console.log(data);
            });
    }, [item]);

    return (
        <>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                aria-label="contacts"
            >
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText inset primary="Percel Info: " />
                        <ListItemText primary={item.parcel_info} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText inset primary="Percel Cost: " />
                        <ListItemText inset primary={item.parcel_cost} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText inset primary="Starting Location: " />
                        <ListItemText inset primary={item.parcel_starting_location} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText inset primary="Sender Name: " />
                        <ListItemText inset primary={item.sender_name} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText inset primary="Sender Address: " />
                        <ListItemText inset primary={item.sender_address} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText inset primary="Sender Phone: " />
                        <ListItemText inset primary={item.sender_phone} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText inset primary="Receiver Name: " />
                        <ListItemText inset primary={item.receiver_name} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText inset primary="Receiver Address: " />
                        <ListItemText inset primary={item.receiver_address} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText inset primary="Receiver Phone: " />
                        <ListItemText inset primary={item.receiver_phone} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding align="center">
                    <ListItemButton>
                        <Link color="inherit" underline="none" to='/'><Button type="Submit" variant="contained" >Go to My Percel</Button></Link>
                    </ListItemButton>
                </ListItem>
            </List>

        </>
    );
};

export default PercelDetails;