import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import StickyFooter from './StickyFooter.js'
import Header from './Header.js';
import Banner from './Banner.js';
import Footer from '../feed/Footer.js';
import { Box } from '@mui/system';

const theme = createTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#3f51b5',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            light: '#ff4081',
            main: '#f50057',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#fff',
        },
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: 3,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
    },
});

const sections = [
    { title: 'Order', url: '#' },
    { title: 'Catalog', url: '#' },
    { title: 'About Us', url: '#' }
];

export default function MainContainer(props) {
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                }}
            >
                <CssBaseline />
                <Box sx={{ flex: '0 1 auto' }}>
                    <Header title="Blog" sections={sections} />
                </Box>
                <Box sx={{
                    flex: '1 1 auto',
                    overflow: 'hidden',
                    position: 'relative',
                }}>
                    <Banner img="/bg.svg" />
                </Box>
                {/* <Container component="main">
                {props.content}
            </Container> */}
                <Footer
                    title="GOOD PRICE PHARMACY"
                    description="General Enquiries: (0)944-226-994"
                />
            </Box>
        </ThemeProvider>
    );
}