import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { MediumButton } from './customizedButton';

const useStyles = makeStyles({
  paper: {
    textAlign: 'center',
    color: 'green',
  },
  aaa: {
    flexGrow: 1,
    height: 100,
    width: 100,
    BackgroundColor: 'black',
  },
  root: {
    width: '100%',
    textAlign: 'center',
    height: '100%',
    backgroundColor: 'green',
  },

  animatedItem: {
    animation: `$myMove 3s`,
    fontSize: 40,
  },

  '@keyframes myMove': {
    '0%': { transform: 'translateY(10px)', opacity: 0 },

    '100%': { transform: 'translateY(0)', opacity: 1 },
  },
  animatedItem1: {
    animation: `$myMove1 8s`,
  },

  '@keyframes myMove1': {
    '0%': { opacity: 0.1 },

    '100%': { opacity: 1 },
  },
});

export default function ContentSection(props) {
  const classes = useStyles();
  const href = props.href || '';
  const imageUri = props.imageUri || '/home.jpg';
  return (
    <div className={classes.root}>
      <Grid container justify="flex-end" alignItems="stretch" style={{ height: '100%' }}>
        <Grid item xl={3} md={5} xs={12}>
          <div
            display="flex"
            flexDirection="column"
            style={{
              backgroundColor: 'white',
              width: '100%',
              paddingTop: 80,
              height: '100%',
              position: 'relative',
              boxSizing: 'border-box',
            }}
          >
            <Typography className={classes.animatedItem} variant="h5">
              Only $1.49/Watt for Solar
            </Typography>
            <Typography className={classes.animatedItem1} variant="subtitle1">
              Lowest Cost in America - Money-back guarantee
            </Typography>
            <div>
              <MediumButton style={{ position: 'absolute', bottom: 50, right: 50 }} name="submit now" href={href} />
            </div>
          </div>
        </Grid>
        <Grid item xl={9} md={7} xs={12}>
          <div
            style={{
              backgroundImage: `url(${imageUri})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundColor: 'black',
              width: '100%',
              height: '100%',
            }}
          ></div>
        </Grid>
      </Grid>
    </div>
  );
}
