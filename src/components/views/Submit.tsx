import {Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import TestContainer from '../TestContainer';
import PrimaryButton from "../ui/PrimaryButton";
import {connect, useDispatch} from "react-redux";
import addToSpreadsheet from "../../api";
import {useNavigate} from "react-router-dom";

const Submit = (state: any) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [view, setView] = useState<boolean>(true);
    const [data, setData] = useState<any>(null);

    const submit = async () => {
        await addToSpreadsheet(
            data.name,
            data.email,
            data.phone,
            data.score,
        );
        setView(!view)
    }

    useEffect(() => {
        if (state.quiz && state.test) {
            setData({
                name: state.quiz.name,
                email: state.quiz.email,
                phone: state.quiz.phone || "",
                score: state.test.score,
            })
            dispatch({
                type: "REGISTER",
                payload: null
            })
        } else {
            navigate("/")
        }
    }, []);

    const toTheStart = () => {
        window.location.href = window.location.origin;
    }

    const renderSubmitView = () => {
        return data && <TestContainer>
            <Typography component="h1" variant="h3" color="#fff" sx={{mt: 3}}>
                That’s it, you did it!
            </Typography>
            <Typography component="h2" variant="h6" color="#fff">
                You have completed the quiz with the test.score of:
            </Typography>
            <Typography component="p" variant="h1" color="primary" sx={{mt: 4}}>
                {`${data.score}%`}
            </Typography>
            <PrimaryButton text="Submit the results" clickEvent={submit}/>
        </TestContainer>
    }

    const renderReturnView = () => {
        return data && <TestContainer>
                <Typography component="h1" variant="h3" color="#fff" sx={{mt: 3}}>
                    Thank you for your interest in us!
                </Typography>
                <Typography component="h2" variant="h6" color="#fff">
                    We’ll evaluate yor answers and get back to you shortly, cheers!
                </Typography>
                <PrimaryButton text="To the start" clickEvent={toTheStart} />
            </TestContainer>
    }

    return view ? renderSubmitView() : renderReturnView();
}

const mapStateToProps = (state: any) => state

export default connect(mapStateToProps)(Submit)