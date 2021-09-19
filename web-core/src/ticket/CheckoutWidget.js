import * as React from 'react';

import { Grid, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles'

const FocusTextField = styled(TextField)(({ theme }) => ({
  marginTop: 15,
  background: '#DCE9FB',
  '& .MuiOutlinedInput-notchedOutline': {
    borderWidth: 0,
  },
}))

export default function CheckoutWidget() {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <Box
      sx={{
        py: 2,
        pl: 1,
        background: '#DCE9FB',
        borderColor: 'rgba(0, 0, 0, 0.23)',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 3,
        boxSizing: 'border-box',
      }}>
      <Grid container spacing={1}>
        <Grid
          item
          xs={12}
          sx={{
            'border-bottom': '1px solid rgba(0, 0, 0, 0.23)'
          }}
        >
          <FocusTextField
            required
            id="fullName"
            name="Full Name"
            label="Full Name"
            defaultValue="Nguyễn Văn Thịnh"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={7}>
          <FocusTextField
            required
            id="address"
            name="address"
            label="Address"
            defaultValue="356 Lac Long Quan"
            fullWidth
            autoComplete="shipping address-line"
          />
        </Grid>
        <Grid item xs={5}>
          <FocusTextField
            required
            id="idcard"
            name="idcard"
            label="ID Number"
            defaultValue="xxxx-xxxx"
            fullWidth
            autoComplete="id number"
          />
        </Grid>
      </Grid>
    </Box>
  );
}