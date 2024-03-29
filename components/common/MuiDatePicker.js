import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useTranslation } from 'next-i18next';

export default function MuiDatePickers ({ label = "", value, setValue = () => { } }) {
    const { t } = useTranslation("common")

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
                {/* <MobileDatePicker
                    label="For mobile"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
                <DesktopDatePicker
                    label="For desktop"
                    value={value}
                    minDate={dayjs('2017-01-01')}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                /> */}
                <DatePicker
                    disableFuture
                    label={label}
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField
                        {...params}
                        inputProps={
                            {
                                ...params.inputProps,
                                placeholder: t("kun/oy/yil")
                            }
                        } />}
                />
            </Stack>
        </LocalizationProvider>
    );
}