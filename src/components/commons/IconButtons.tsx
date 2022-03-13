import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Link from './link';

const useStyles = makeStyles(() => ({
  animatedItem: {
    animation: `$myMove 2s infinite`,
  },

  '@keyframes myMove': {
    '0%': { transform: 'translateY(0)' },
    '20%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(0)' },
    '80%': { transform: 'translateY(0)' },
    '100%': { transform: 'translateY(0)' },
    '40%': { transform: 'translateY(6px)' },
    '60%': { transform: 'translateY(3px)' },
  },
}));

export default function IconButtons(props) {
  const classes = useStyles();
  const href = props.href || '';
  return (
    props.show === true && (
      <IconButton className={classes.animatedItem} component={Link} href={href}>
        <ArrowBackIosIcon style={{ fontSize: 30, color: 'white', transform: 'rotate(-90deg)' }} />
      </IconButton>
    )
  );
}
