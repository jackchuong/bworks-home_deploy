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
  const classes = styles();

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
                  Enter your wallet address to receive bWorks token
                </Typography>
              </Grid>
            </Grid>

            <form className={classes.form} noValidate>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={onChangeMail}
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
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                  <Button
                    type="submit"
                    onClick={onClick}
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.loginSubmit}
                  >
                    Submit
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
