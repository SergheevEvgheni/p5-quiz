import React, { FC } from "react";
import { Box, Container, Grid } from '@mui/material';
import Logo from "../assets/images/logo.png";

const TestContainer: FC<{children: any}> = (props) => <Box component="main" sx={{ backgroundColor: "#1C1B1F" }}>
    <Grid container display="flex" justifyContent="center" direction="column" sx={{ minHeight: "100vh", pb:4 }}>
        <Container sx={{pt: 4}}>
            <a href={window.location.origin}>
                <img src={Logo} alt="Pentalog" style={{ height: "28px", width: "124px" }} />
            </a>
            <Box sx={{mt: 6}}>
                {props.children}
            </Box>
        </Container>
    </Grid>
</Box>

export default TestContainer;