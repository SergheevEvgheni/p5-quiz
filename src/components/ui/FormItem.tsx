import React, { FC } from "react";
import {Box, TextField} from '@mui/material';

const FormItem: FC<{name: string, icon: any, value: string, required?: boolean, changeEvent: any}> = (props) => <Box
    sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: "#303034"
    }}
>
    {props.icon}
    <TextField
        variant="filled"
        onChange={props.changeEvent}
        value={props.value}
        label={props.name}
        name={props.name}
        id={props.name}
        required={props.required}
        fullWidth
        color="info"
        InputProps={{ disableUnderline: true }}
        sx={{
            color: '#fff',
            label: { color: '#fff' },
            input: {
                color: '#fff',
                backgroundColor: "#303034",
            }
        }}
    />
</Box>

export default FormItem;