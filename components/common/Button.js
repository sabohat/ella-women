import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function MuiButton({ label }) {
    return (
        <Button fullWidth size="large" variant="contained">{label}</Button>
    );
}