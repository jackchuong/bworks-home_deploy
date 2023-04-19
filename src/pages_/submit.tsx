/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import ContactSupport from '@material-ui/icons/Lock';
import Typography from '@material-ui/core/Typography';
import { NextPage } from 'next';
import MainLayout from '@/layouts/mainLayout';
import styles from '@/layouts/styles';
import axios from 'axios';
import { validateEmail } from '../utils/common';

export default function SignInSide(): NextPage {
  const onClick = (e) => {
    e.preventDefault();
    if (!validateEmail(data.email)) {
      setWarning('Not a valid email address');
      return;
    }
    if (data.password !== repeatPassword) {
      setWarning('password is not matched');
      return;
    }
    const url = process.env.NEXT_PUBLIC_SUMMIT_ACCOUNT;
    axios({
      url: url,
      method: 'POST',
      data: data,
    })
      .then((response) => {
        setWarning('Submit succeed, verification link is sent to your email please verify');
        setData({ email: '', walletAddress: '', username: '', fullName: '', password: '' });
        setRepeatPassword('');
      })
      .catch((error) => {
        setWarning(`Submit failed: ${error.response.data.message}`);
        setData({ email: '', walletAddress: '', username: '', fullName: '', password: '' });
        setRepeatPassword('');
        console.log(error);
      });
  };

  const [data, setData] = React.useState({ email: '', walletAddress: '', username: '', fullName: '', password: '' });
  const [warning, setWarning] = React.useState(null);

  const [repeatPassword, setRepeatPassword] = React.useState('');

  const onChangeEmail = (event) => {
    setData({ ...data, email: event.target.value });
  };
  const onChangeWalletAddress = (event) => {
    setData({ ...data, walletAddress: event.target.value });
  };

  const onChangeUsername = (event) => {
    setData({ ...data, username: event.target.value });
  };

  const onChangeFullName = (event) => {
    setData({ ...data, fullName: event.target.value });
  };

  const onChangePassword = (event) => {
    setData({ ...data, password: event.target.value });
  };

  const onChangeRepeatPassword = (event) => {
    setRepeatPassword(event.target.value);
  };

  const classes = styles();

  return (
    <MainLayout footer={true} bar={false}>
      <div className={classes.loginImage}>
        <Grid container component="main" className={classes.loginRoot} justify="center" alignItems="center">
          <Grid item xs={12} sm={8} md={4} elevation={0} square>
            <Grid container>
              <Grid item>
                <Avatar className={classes.loginAvatar}>
                  <ContactSupport />
                </Avatar>
              </Grid>
              <Grid item>
                <Typography component="h1" variant="h5" style={{ marginTop: 10, marginLeft: 10 }}>
                  Submit an account
                </Typography>
              </Grid>
            </Grid>

            <form className={classes.form} noValidate>
              <Grid container spacing={1}>
                <Grid item xs={6} sm={6} md={6}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="Username"
                    label="Username"
                    name="Username"
                    onChange={onChangeUsername}
                    value={data.username}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={onChangeEmail}
                    value={data.email}
                  />
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    type="password"
                    id="password"
                    label="Password"
                    name="Password"
                    onChange={onChangePassword}
                    value={data.password}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    type="password"
                    required
                    fullWidth
                    id="repeatPassword"
                    label="Repeat password"
                    name="repeatPassword"
                    autoComplete="repeatPassword"
                    onChange={onChangeRepeatPassword}
                    value={repeatPassword}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="fullName"
                    label="Full name"
                    multiline={true}
                    id="fullName"
                    minRows={5}
                    maxRows={10}
                    size="medium"
                    onChange={onChangeFullName}
                    value={data.fullName}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="request"
                    label="Wallet address"
                    multiline={true}
                    id="request"
                    minRows={5}
                    maxRows={10}
                    size="medium"
                    onChange={onChangeWalletAddress}
                    value={data.walletAddress}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.loginSubmit}
                    onClick={onClick}
                  >
                    Send request
                  </Button>
                  {warning && (
                    <Typography component="h1" variant="h5" style={{ marginTop: 10, marginLeft: 10, color: 'red' }}>
                      {warning}
                    </Typography>
                  )}
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </div>
    </MainLayout>
  );
}
