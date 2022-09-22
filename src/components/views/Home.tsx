import React, { FC } from "react";
import { Container, Box, Grid, Typography } from '@mui/material';
import Logo from "../../assets/images/logo.png"
import bg from "../../assets/images/bg.png"
import {blue} from "@mui/material/colors";
import PrimaryButton from "../ui/PrimaryButton";
import { Link } from 'react-router-dom';

const Home: FC = () => {
    return (
        <Box component="main" sx={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: blue["900"],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <Grid container display="flex" justifyContent="center" direction="column" sx={{ minHeight: "100vh", pb:4 }}>
                <Container>
                    <Link to="/">
                        <img src={Logo} alt="Pentalog" style={{ height: "42px", width: "187px" }} />
                    </Link>
                    <Typography component="h1" variant="h4" color="#fff" sx={{mt: 7, mb: 1}}>
                        Hey, think you’re ready for an IT career?
                    </Typography>
                    <Typography component="h2" variant="h5" color="#fff">
                        Take this short quiz and find out!
                    </Typography>
                    <PrimaryButton text="Let’s do it" link="/register" />
                </Container>
            </Grid>
        </Box>
    );
};

export default Home;