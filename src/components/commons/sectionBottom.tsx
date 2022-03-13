import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { MediumButton } from './customizedButton';
import IconButtons from '@/components/commons/iconButtons';

const useStyles = (color) =>
  makeStyles({
    root: {
      width: '100%',
      justifyContent: 'center',
      height: 80,
      display: 'flex',
      alignItems: 'flex-end',
      color: color,
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      paddingLeft: 43,
    },
    item1: {
      marginRight: 30,
      marginLeft: 30,
      animation: `$myMove 2s`,
    },

    item2: {
      borderWidth: 1,
      borderStyle: 'solid',
      height: '100%',
      animation: `$myMove 4s`,
    },
    item3: {
      marginRight: 30,
      marginLeft: 30,
      animation: `$myMove 6s`,
    },
    item4: {
      borderWidth: 1,
      borderStyle: 'solid',
      height: '100%',
      animation: `$myMove 12s`,
    },
    item5: {
      marginRight: 30,
      marginLeft: 30,
      animation: `$myMove 16s`,
    },
    item6: {
      alignSelf: 'center',
      marginLeft: 10,
      animation: `$myMove 20s`,
    },

    '@keyframes myMove': {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
    },
  });

export default function FooterSection(props) {
  const href = props.href || '';
  const name = props.name || 'ORDER';
  const classes = useStyles(props.color)();

  return (
    <div>
      <div className={classes.root}>
        <div className={classes.item1}>
          <Typography variant="h5" gutterBottom>
            3X Test
          </Typography>
          <Typography variant="body2" gutterBottom>
            Lowest Cost in America
          </Typography>
        </div>
        <div className={classes.item2}></div>
        <div className={classes.item3}>
          <Typography variant="h5" gutterBottom>
            3X Test
          </Typography>
          <Typography variant="body2" gutterBottom>
            Lowest Cost in America
          </Typography>
        </div>
        <div className={classes.item4}></div>
        <div className={classes.item5}>
          <Typography variant="h5" gutterBottom>
            3X Test
          </Typography>
          <Typography variant="body2" gutterBottom>
            Lowest Cost in America
          </Typography>
        </div>
        <div className={classes.item6}>
          <MediumButton color={props.color} name={name} href={href} />
        </div>
      </div>
      <div className={classes.container}>
        <IconButtons show={true} href="" />
      </div>
    </div>
  );
}
