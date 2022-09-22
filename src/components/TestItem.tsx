import {Box, Grid, Paper, Stack} from "@mui/material";
import React, {FC} from "react";

const TestItem: FC<{icon: any, text: string | number, isActive: boolean, clickEvent: any}> = (props) => <Paper
    sx={{
        backgroundColor: props.isActive ? "#7777" : "transparent",
        color: "#fff",
        border: "2px solid #777777",
        borderRadius: "8px",
        p: 1.6,
        cursor: "pointer"
    }}
    onClick={props.clickEvent}
>
    <Stack spacing={1}>
        <Grid display="flex" alignItems="flex-start">
            <img src={props.icon} alt="Item" />
            <Box sx={{ml: 1.4}}>{props.text}</Box>
        </Grid>
    </Stack>
</Paper>

export default TestItem;