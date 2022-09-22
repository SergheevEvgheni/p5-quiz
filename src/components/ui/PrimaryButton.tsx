import React, { FC } from "react";
import { Button } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const PrimaryButton: FC<{text: string, link?: string, disabled?: boolean, clickEvent?: (e: any) => void}> = (props) => <Button
    variant="contained"
    disabled={props.disabled}
    component={props.link ? Link : Button}
    to={props.link && props.link}
    endIcon={<ChevronRight />}
    sx={{
        mt: 8,
        color: "#fff",
        borderRadius: 0,
        pl: 4,
        pr: 4,
        '& .MuiButton-endIcon': {
            ml: 0.3
        },
    }}
    onClick={props.clickEvent}
>
    { props.text }
</Button>

export default PrimaryButton;