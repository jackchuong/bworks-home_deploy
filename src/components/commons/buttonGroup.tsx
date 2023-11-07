import { LargeButton } from '@/components/commons/customizedButton';
import IconButtons from '@/components/commons/iconButtons';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery, Theme, useTheme } from '@mui/material';

export default function ButtonGroup(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('lg'));
  const mt = matches ? 40 : 100;

  const useStyles = makeStyles({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: mt,
    },
    container1: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    leftMove: {
      animation: `$leftMove 1.5s`,
    },
    rightMove: {
      animation: `$RightMove 1.5s`,
    },
    '@keyframes leftMove': {
      '0%': { transform: 'translateX(-20px)' },
      '100%': { transform: 'translateX(0)' },
    },
    '@keyframes RightMove': {
      '0%': { transform: 'translateX(20px)' },
      '100%': { transform: 'translateX(0)' },
    },
  });

  const classes = useStyles();
  const show = props.showIconButton;
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.leftMove}>
          <LargeButton
            href={props.leftButton.href}
            name={props.leftButton.name}
            backgroundColor={props.leftButton.backgroundColor}
            color={props.leftButton.color}
          />
        </div>
        <div className={classes.rightMove}>
          <LargeButton
            href={props.rightButton.href}
            name={props.rightButton.name}
            backgroundColor={props.rightButton.backgroundColor}
            color={props.rightButton.color}
          />
        </div>
      </div>
      <div className={classes.container1}>
        <IconButtons show={show} href="" />
      </div>
    </div>
  );
}
