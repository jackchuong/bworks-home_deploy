import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { NextPage } from 'next';
import MainLayout from '@/layouts/mainLayout';
import axios from 'axios';
import { validateEmail } from '../utils/common';
import Box from '@mui/material/Box';
import jwt from 'jsonwebtoken';

export default function Promotion(): NextPage {
  const onClick = (e) => {
    e.preventDefault();
    if (!validateEmail(data.email)) {
      setWarning({ type: 'error', message: 'Invalid email address' });
      return;
    }

    if (!data.address) {
      setWarning({ type: 'error', message: 'Address is empty' });
      return;
    }

    const secret = process.env.NEXT_PUBLIC_JWT_HOME_PAGE_TOKEN_SECRET;
    const expiresIn = process.env.NEXT_PUBLIC_TOKEN_EXPIRE;

    let token;

    try {
      token = jwt.sign(
        {
          key: 'homePage',
        },
        secret,
        { expiresIn },
      );
    } catch (e) {
      setWarning({ type: 'error', message: 'Can not generate access token' });
      return;
    }

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const url = `${apiUrl}/public/tokenreceivers`;

    axios({
      url: url,
      method: 'POST',
      data,
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        setWarning({ type: 'success', message: 'Submitted' });
        setData({ email: '', address: '' });
      })
      .catch((error) => setWarning({ type: 'error', message: `Submit failed: ${error.response.data.message}` }));
  };

  const [data, setData] = React.useState({ email: '', address: '' });
  const [warning, setWarning] = React.useState({ type: '', message: '' });

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
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh',
            width: 500,
          }}
        >
          <Typography component="h1" variant="subtitle2">
            Enter your wallet address to receive bWorks token
          </Typography>
          <button
            onClick={() => setData({ email: '', address: '' })}
            style={{ border: 'none', background: 'none', alignSelf: 'flex-end' }}
          >
            clear
          </button>
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
            value={data.email}
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
            value={data.address}
          />
          <Button onClick={onClick} fullWidth variant="outlined">
            Submit
          </Button>
          {warning.message && (
            <Typography
              component="h1"
              variant="caption"
              style={{ marginTop: 10, marginLeft: 10, color: warning.type === 'error' ? 'red' : 'black' }}
            >
              {warning.message}
            </Typography>
          )}
        </Box>
      </Box>
    </MainLayout>
  );
}
