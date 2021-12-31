import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



export default function MyPercel() {
    const [percels, setPercels] = useState([]);
    const [loading, setLoading] = useState(false);
    const { user } = useAuth();
    useEffect(() => {
        fetch('https://enigmatic-beach-77527.herokuapp.com/percels')
            .then(res => res.json())
            .then(data => {
                setPercels(data);
                setLoading(true);
            });
    }, [percels]);

    const handleDelete = id => {
        const process = window.confirm('Are you sure');
        if (process) {
            const url = `https://enigmatic-beach-77527.herokuapp.com/percels/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        window.alert("Item has been deleted");
                        const remOrder = percels.filter(user => user._id !== id);
                        setPercels(remOrder);

                    }
                })
        }
    }

    return (
        <TableContainer component={Paper} sx={{ my: 4 }}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Percel Info</StyledTableCell>
                        <StyledTableCell align="right">Cost</StyledTableCell>
                        <StyledTableCell align="right">Status</StyledTableCell>
                        <StyledTableCell align="right">View</StyledTableCell>

                        <StyledTableCell align="right">Delete</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {percels.map((row) => (
                        <StyledTableRow key={row._id}>
                            <StyledTableCell component="th" scope="row">
                                {row.parcel_info}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.parcel_cost}</StyledTableCell>
                            <StyledTableCell align="right">{row.percel_status}</StyledTableCell>
                            <StyledTableCell align="right"><Button variant="outlined" color="warning">
                                <Link to={`my-percel/${row._id}`}>Details</Link>
                            </Button></StyledTableCell>

                            <StyledTableCell align="right"><Button variant="outlined" color="error">
                                <span onClick={() => handleDelete(row._id)}>Delete</span>
                            </Button></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
