import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import { useMediaQuery, Theme, useTheme } from '@mui/material';

export default function HeaderSection(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('lg'));
  const mt = matches ? 20 : 40;

  const useStyles = makeStyles({
    root: {
      width: '100%',
      textAlign: 'center',
      marginBottom: mt,
    },

    animatedItem: {
      animation: `$myMove 3s`,
    },

    '@keyframes myMove': {
      '0%': { transform: 'translateY(20px)', opacity: 0 },
      '100%': { transform: 'translateY(0)', opacity: 1 },
    },

    animatedItem1: {
      animation: `$myMove1 5s`,
    },

    '@keyframes myMove1': {
      '0%': { transform: 'translateX(0px)', opacity: 0 },
      '100%': { transform: 'translateX(0)', opacity: 1 },
    },

    animatedItem2: {
      animation: `$myMove2 5s `,
    },

    '@keyframes myMove2': {
      '0%': { transform: 'translateX(0px) translateY(0px)', opacity: 0 },
      '100%': { transform: 'translateX(0) translateY(0)', opacity: 1 },
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        className={classes.animatedItem1}
        style={{ color: '#03a9f4', fontSize: 12, alignSelf: 'flex-end' }}
        variant="subtitle2"
      >
        Funded by Cardano Catalyst
      </Typography>
      <Typography className={classes.animatedItem} style={{ color: props.color }} variant="h4">
        A smart contract based HR platform built on Cardano
      </Typography>
      <Typography className={classes.animatedItem2} sx={{ color: 'primary' }} variant="subtitle2">
        Match jobs & payment guarantee
      </Typography>
    </div>
  );
}
