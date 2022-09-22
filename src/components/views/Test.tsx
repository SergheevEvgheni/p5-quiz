import React, {useEffect, useMemo, useState} from "react";
import TestContainer from '../TestContainer';
import {Typography, Stack, Button, Grid, Box, Container, LinearProgress} from "@mui/material";
import TestItem from "../TestItem";
import a from "../../assets/images/a.svg";
import b from "../../assets/images/b.svg";
import c from "../../assets/images/c.svg";
import d from "../../assets/images/d.svg";
import questions from "../../questions.json";
import {ChevronRight, ArrowBack, ArrowForward} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {connect, useDispatch} from "react-redux";

const Test = () => {
    const NUMBER_OF_QUESTIONS = 10;
    const TIMER_SECONDS = 300;
    const answerKey = "Answer";

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [questionStack, setQuestionStack] = useState<any>([]);
    const [testTimer, setTestTimer] = useState(TIMER_SECONDS);

    const completeTest = () => {
        dispatch({
            type: "COMPLETE_TEST",
            payload: {
                questionStack,
                numberOfQuestions: NUMBER_OF_QUESTIONS
            }
        })
        setTimeout(() => {
            navigate("/submit")
        }, 0)
    }

    useEffect(() => {
        if (testTimer === 0) completeTest();
    },[testTimer])

    useEffect(() => {
        const timer = setInterval(() => {
            setTestTimer((oldTestTimer) => oldTestTimer === 0 ? 0 : oldTestTimer - 1)
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const currentQuestion = useMemo(() => questionStack[currentQuestionIndex], [currentQuestionIndex, questionStack]);

    const displayedTimer = useMemo(() => new Date(testTimer * 1000).toISOString().slice(14, 19), [testTimer])

    const progress = useMemo(() => (currentQuestionIndex / NUMBER_OF_QUESTIONS) * 100, [currentQuestionIndex]);

    const setRandomQuestion = () => {
        const getRandomInt = (min: number, max: number) => {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);
        }

        const randomQuestion = questions[getRandomInt(0, questions.length)]

        if (!!questionStack.find((item: { Question: string; }) => item.Question === randomQuestion.Question)) {
            setRandomQuestion();
        } else {
            setQuestionStack([...questionStack, randomQuestion]);
        }
    };

    useEffect(setRandomQuestion, []);

    const setAnswer = (answer: string | number) => {
        if (questionStack[currentQuestionIndex]) {
            questionStack[currentQuestionIndex][answerKey] = String(answer);
            setQuestionStack([...questionStack]);
        }
    }
    const submitAnswer = () => {
        if (currentQuestionIndex === (NUMBER_OF_QUESTIONS - 1)) {
            completeTest()
        } else {
            if (currentQuestionIndex + 1 >= questionStack.length) {
                setRandomQuestion();
            }
            setCurrentQuestionIndex(currentQuestionIndex < (NUMBER_OF_QUESTIONS - 1) ? currentQuestionIndex + 1 : currentQuestionIndex);
        }
    }

    return currentQuestion && <TestContainer>
        <Typography component="h1" variant="h6" color="#fff" sx={{mb: 5}}>
            {currentQuestion.Question}
        </Typography>
        <Stack spacing={2}>
            <TestItem text={currentQuestion.A} icon={a} isActive={currentQuestion[answerKey] ===  String(currentQuestion.A)} clickEvent={() => setAnswer(currentQuestion.A)} />
            <TestItem text={currentQuestion.B} icon={b} isActive={currentQuestion[answerKey] ===  String(currentQuestion.B)} clickEvent={() => setAnswer(currentQuestion.B)} />
            <TestItem text={currentQuestion.C} icon={c} isActive={currentQuestion[answerKey] ===  String(currentQuestion.C)} clickEvent={() => setAnswer(currentQuestion.C)} />
            <TestItem text={currentQuestion.D} icon={d} isActive={currentQuestion[answerKey] ===  String(currentQuestion.D)} clickEvent={() => setAnswer(currentQuestion.D)} />
        </Stack>
        <Button
            variant="contained"
            color="secondary"
            disabled={!currentQuestion[answerKey]}
            endIcon={<ChevronRight />}
            sx={{
                mt: 8,
                mb: 6,
                color: "#fff",
                borderRadius: 0,
                pl: 4,
                pr: 4,
                '& .MuiButton-endIcon': {
                    ml: 0.3
                },
                "&.Mui-disabled": {
                    backgroundColor: "#082ECE4D"
                }
            }}
            onClick={submitAnswer}
        >
            { currentQuestionIndex === NUMBER_OF_QUESTIONS - 1 ? "Submit" : "Next"}
        </Button>
        <Box sx={{ width: '100%', position: "absolute", left: "0", right: "0", bottom: "0" }}>
            <Container>
                <Grid display="flex" justifyContent="space-between" alignItems="center" sx={{ pb: 2 }}>
                    <Typography component="p" variant="h5" color="primary">
                        {displayedTimer}
                    </Typography>
                    <Grid display="flex">
                        <Box
                            sx={{
                                p: 1,
                                border: "2px solid #777777",
                                display: "flex",
                                alignItems: "center",
                                opacity: currentQuestionIndex === 0 ? "0.5" : "1",
                                mr: 1.5
                            }}
                            onClick={() => setCurrentQuestionIndex(currentQuestionIndex > 0 ? currentQuestionIndex - 1 : currentQuestionIndex)}
                        >
                            <ArrowBack color="info" />
                        </Box>
                        <Box
                            sx={{
                                p: 1,
                                border: "2px solid #777777",
                                display: "flex",
                                alignItems: "center",
                                opacity: currentQuestionIndex === questionStack.length - 1 ? "0.5" : "1"
                            }}
                            onClick={() => setCurrentQuestionIndex(currentQuestionIndex < questionStack.length - 1 ? currentQuestionIndex + 1 : currentQuestionIndex)}
                        >
                            <ArrowForward color="info" />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <LinearProgress variant="determinate" color="secondary" value={progress} />
        </Box>
    </TestContainer>
}

const mapStateToProps = (state: any) => state

export default connect(mapStateToProps)(Test)