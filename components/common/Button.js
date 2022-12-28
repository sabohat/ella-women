import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function MuiButton({ label, onClick }) {
    return (
        <Button fullWidth size="large" variant="contained" onClick={onClick}>{label}</Button>
    );
}