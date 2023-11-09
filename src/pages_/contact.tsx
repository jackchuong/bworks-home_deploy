/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { NextPage } from 'next';
import MainLayout from '@/layouts/mainLayout';
import Box from '@mui/material/Box';

export default function SignInSide(): NextPage {
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
          />

          <Button type="submit" variant="outlined" fullWidth>
            Send message
          </Button>
        </Box>
      </Box>
    </MainLayout>
  );
}
