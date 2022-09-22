import React, {useState, useMemo, useEffect} from "react";
import { Box, Typography, Stack } from '@mui/material';
import PrimaryButton from "../ui/PrimaryButton";
import { AccountCircle, AlternateEmail, Phone } from '@mui/icons-material';
import FormItem from '../ui/FormItem';
import TestContainer from '../TestContainer';
import { useNavigate  } from "react-router-dom";
import {useDispatch} from 'react-redux'

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [nameValue, setNameValue] = useState<string>("");
    const [emailValue, setEmailValue] = useState<string>("");
    const [phoneValue, setPhoneValue] = useState<string>("");

    const isBtnDisabled = useMemo(() => !(nameValue && emailValue), [nameValue, emailValue]);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (!isBtnDisabled) {
            dispatch({
                type: "REGISTER",
                payload: {
                    name: nameValue,
                    email: emailValue,
                    phone: phoneValue,
                }
            })
            setTimeout(() => {
                navigate("/test")
            }, 0)
        }
    };

    return (
        <TestContainer>
            <Typography component="h1" variant="h4" color="#fff" sx={{mb: 1}}>
                But first things first!
            </Typography>
            <Typography component="h2" variant="h6" color="#fff">
                Leave your contacts so we could get in touch with you later
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off" sx={{mt: 6}}>
                <Stack spacing={2} sx={{ width: "370px" }}>
                    <FormItem
                        value={nameValue}
                        changeEvent={(e: any) => setNameValue(e.target.value)}
                        required
                        name="Name"
                        icon={<AccountCircle sx={{color: '#fff', fontSize: 40, p: 1}} />}
                    />
                    <FormItem
                        value={emailValue}
                        changeEvent={(e: any) => setEmailValue(e.target.value)}
                        required
                        name="Email"
                        icon={<AlternateEmail sx={{color: '#fff', fontSize: 40, p: 1}} />}
                    />
                    <FormItem
                        value={phoneValue}
                        changeEvent={(e: any) => setPhoneValue(e.target.value)}
                        name="Phone"
                        icon={<Phone sx={{color: '#fff', fontSize: 40, p: 1}} />}
                    />
                    <Box>
                        <PrimaryButton disabled={isBtnDisabled} text="Start the quiz" clickEvent={handleSubmit} />
                    </Box>
                </Stack>
            </Box>
        </TestContainer>
    );
};

export default (Register)