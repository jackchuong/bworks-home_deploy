/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { NextPage } from 'next';
import MainLayout from '@/layouts/mainLayout';
import axios from 'axios';
import { validateEmail } from '../utils/common';
import Box from '@mui/material/Box';

export default function SignInSide(): NextPage {
  const onClick = (e) => {
    e.preventDefault();
    if (!validateEmail(data.email)) {
      setWarning('Not a valid email address');
      return;
    }

    const url = process.env.NEXT_PUBLIC_RECEIVE_TOKEN_API;
    axios({
      url: url,
      method: 'POST',
      data: data,
    })
      .then((response) => setWarning('Submit succeed'))
      .catch((error) => setWarning(`Submit failed: ${error.response.data.message}`));
  };

  const [data, setData] = React.useState({ email: '', address: '' });
  const [warning, setWarning] = React.useState(null);

  const onChangeMail = (event) => {
    setData({ ...data, email: event.target.value });
  };
  const onChangeWalletAddress = (event) => {
    setData({ ...data, address: event.target.value });
  };

  return (
    <MainLayout footer={true} bar={true}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80vh',
        }}
      >
        <Typography component="h1" variant="subtitle2">
          Enter your wallet address to receive bWorks token
        </Typography>

        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="email"
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={onChangeMail}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="request"
            label="Wallet address"
            multiline={true}
            id="request"
            onChange={onChangeWalletAddress}
          />
          <Button onClick={onClick} fullWidth variant="outlined">
            Submit
          </Button>
          {warning && (
            <Typography component="h1" variant="caption" style={{ marginTop: 10, marginLeft: 10, color: 'red' }}>
              {warning}
            </Typography>
          )}
        </form>
      </Box>
    </MainLayout>
  );
}
