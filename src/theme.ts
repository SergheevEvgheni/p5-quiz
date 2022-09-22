import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#EE581E',
        },
        secondary: {
            main: '#082ECE',
        },
        info: {
            main: '#fff',
        },
        action: {
            disabledBackground: '#EE581E4D',
            disabled: '#FFFFFF'
        },
    },
    typography: {
        fontFamily: "IBM Plex Sans",
        button: {
            textTransform: "none",
            fontSize: "18px",
        },
    },
});

export default theme;