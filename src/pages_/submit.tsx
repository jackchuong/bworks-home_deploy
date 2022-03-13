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

export default function SignInSide(): NextPage {
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
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                  <Button type="submit" fullWidth variant="contained" color="primary" className={classes.loginSubmit}>
                    Send request
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </div>
    </MainLayout>
  );
}
