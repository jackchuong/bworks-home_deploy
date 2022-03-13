import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    textAlign: 'center',
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

export default function HeaderSection(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.animatedItem} style={{ color: props.color }} variant="h4">
        The world's first smart contract based HR platform on Cardano
      </Typography>
      <Typography className={classes.animatedItem1} style={{ color: props.color }} variant="subtitle1">
        Product-delivery & Money-back guarantee
      </Typography>
    </div>
  );
}
