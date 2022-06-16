import React, { ReactElement } from 'react';
import clsx from 'clsx';
import MenuButton from './menuButton';
import { makeStyles } from '@material-ui/core/styles';
import Link from '../commons/link';
import { topRightMenu } from '@/configs/menu';

interface TopRightMenuProps {
  className: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    transition: 'visibility 1s, opacity 1s ease-in-out',
    '& > *': {
      margin: theme.spacing(0),
      color: theme.palette.common.white,
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  hiddenRoot: {
    transition: 'visibility 1s, opacity 1s ease-in-out',
    opacity: 0,
    '& > *': {
      margin: theme.spacing(0),
      color: theme.palette.common.white,
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));
export default function TopRightMenu({ className, show }: TopRightMenuProps): ReactElement {
  const classes = useStyles();
  const style = show ? classes.root : classes.hiddenRoot;
  return (
    <div className={clsx([className, style])}>
      {topRightMenu.map((item) => (
        <MenuButton key={item.url} href={item.url} component={Link} title={item.name} />
      ))}
    </div>
  );
}
