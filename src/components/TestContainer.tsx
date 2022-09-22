import React, { FC } from "react";
import { Box, Container } from '@mui/material';
import Logo from "../assets/images/logo.png";

const TestContainer: FC<{children: any}> = (props) => <Box component="main" sx={{ backgroundColor: "#1C1B1F", minHeight: "100vh" }}>
    <Container sx={{pt: 4}}>
        <a href={window.location.origin}>
            <img src={Logo} alt="Pentalog" style={{ height: "28px", width: "124px" }} />
        </a>
        <Box sx={{mt: 10}}>
            {props.children}
        </Box>
    </Container>
</Box>

export default TestContainer;