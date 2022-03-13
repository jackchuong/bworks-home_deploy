import React, { ReactElement } from 'react';
import clsx from 'clsx';
import MenuButton from './menuButton';
import { useTheme } from '@material-ui/core/styles';
import Link from '../commons/link';
import { topCenterMenu } from '@/configs/menu';
import { useMediaQuery } from '@material-ui/core';

interface MainMenuProps {
  className: string;
}

const styles = {
  transition: {
    transition: 'visibility 1s, opacity 1s ease-in-out',
  },
  hiddenRoot: {
    transition: 'visibility 1s, opacity 1s ease-in-out',
    opacity: 0,
  },
};

export default function TopCenterMenu(props): ReactElement {
  const style = props.show ? styles.transition : styles.hiddenRoot;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <div
      style={{
        ...style,
        '& > *': {
          margin: theme.spacing(1),
          color: theme.palette.common.white,
        },
      }}
    >
      {matches &&
        topCenterMenu.map((item) => <MenuButton key={item.url} href={item.url} component={Link} title={item.name} />)}
    </div>
  );
}
