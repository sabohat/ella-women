import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MuiTextFields({ label }) {
    return (
        <TextField fullWidth id="outlined-basic" label={label} variant="outlined" />
    );
}