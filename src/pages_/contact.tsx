/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import ContactMail from '@material-ui/icons/ContactMail';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { NextPage } from 'next';
import MainLayout from '@/layouts/mainLayout';
import styles from '@/layouts/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100%',
    // marginTop: theme.spacing(8),
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/4pPzKfd6BEg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(2, 2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide(): NextPage {
  const classes = useStyles();

  return (
    <MainLayout footer={true} bar={false}>
      <Grid container component="main" className={classes.root} justify="center" alignItems="center">
        <Grid item xs={12} sm={8} md={4} elevation={0} square>
          <Grid container>
            <Grid item>
              <Avatar className={classes.avatar}>
                <ContactMail />
              </Avatar>
            </Grid>
            <Grid item>
              <Typography component="h1" variant="h5" style={{ marginTop: 10, marginLeft: 10 }}>
                Contact
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
                  id="organization"
                  label="Organization"
                  name="organization"
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
                  label="Contact detail"
                  multiline={true}
                  id="request"
                  minRows={5}
                  maxRows={10}
                  size="medium"
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12}>
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                  Send request
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </MainLayout>
  );
}
