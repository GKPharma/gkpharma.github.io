import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

function Banner(props) {
    const { img } = props;

    return (
        <Paper
            sx={{
                display: 'flex',
                right: 0,
                height: '100%',
                width: '100%',
                position: 'absolute',
                backgroundColor: '#EBF3FA',
                color: '#fff',
                backgroundSize: 'auto 150%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: {
                    xs: '10vw 50%',
                    md: '25vw 50%',
                    lg: '40vw 50%',
                },
                backgroundImage: `url(${img})`,
            }}
        >
            {/* Increase the priority of the hero background image */}
            <img
                style={{
                    display: 'none',
                }}
                src={img} alt="background"
            />
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    //   backgroundColor: 'rgba(0,0,0,.3)',
                }}
            />
            <Grid container>
                <Grid item md={6}>
                    <Box
                        sx={{
                            position: 'relative',
                            p: { xs: 3, md: 6 },
                            pr: { md: 0 },
                        }}
                    >
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
}

Banner.propTypes = {
    post: PropTypes.shape({
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        imageText: PropTypes.string.isRequired,
        linkText: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
};

export default Banner;