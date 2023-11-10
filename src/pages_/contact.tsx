/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { NextPage } from 'next';
import MainLayout from '@/layouts/mainLayout';
import Box from '@mui/material/Box';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { validateEmail } from '../utils/common';
import Typography from '@material-ui/core/Typography';

export default function SignInSide(): NextPage {
  const onClick = (e) => {
    e.preventDefault();
    if (!validateEmail(data.email)) {
      setWarning({ type: 'error', message: 'Invalid email address' });
      return;
    }
    if (!data.message) {
      setWarning({ type: 'error', message: 'Message is empty' });
      return;
    }

    const secret = process.env.NEXT_PUBLIC_JWT_HOME_PAGE_TOKEN_SECRET;
    const expiresIn = process.env.NEXT_PUBLIC_TOKEN_EXPIRE;

    const token = jwt.sign(
      {
        key: 'homePage',
      },
      secret,
      { expiresIn },
    );
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const url = `${apiUrl}/messages`;

    axios({
      url: url,
      method: 'POST',
      data,
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        setWarning({ type: 'success', message: 'Message sent' });
        setData({ email: '', message: '' });
      })
      .catch((error) => setWarning({ type: 'error', message: `Send message failed: ${error.response.data.message}` }));
  };

  const [data, setData] = React.useState({ email: '', message: '' });
  const [warning, setWarning] = React.useState({ type: '', message: '' });

  const onChangeMail = (event) => {
    setData({ ...data, email: event.target.value });
  };
  const onChangeMessage = (event) => {
    setData({ ...data, message: event.target.value });
  };

  return (
    <MainLayout footer={true} bar={true}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
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
          <button
            onClick={() => setData({ email: '', message: '' })}
            style={{ border: 'none', background: 'none', alignSelf: 'flex-end' }}
          >
            clear
          </button>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="email"
            label="Email"
            id="email"
            onChange={onChangeMail}
            value={data.email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="request"
            label="Message"
            multiline={true}
            id="request"
            rows={6}
            onChange={onChangeMessage}
            value={data.message}
          />

          <Button type="submit" variant="outlined" fullWidth onClick={onClick}>
            Send
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
