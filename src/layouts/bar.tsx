import React, { ReactElement, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LogoMenu from '@/components/menus/logoMenu';
import TopCenterMenu from '@/components/menus/topCenterMenu';
import TopRightMenu from '@/components/menus/rightTopMenu';
import DrawerMenu from '@/components/menus/drawerMenu';
import LanguageButton from './languageButton';
import { ObjKeyValue } from '@/components/dtos/common.dto';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  grow: {
    flexGrow: 1,
  },
  show: {
    flexGrow: 1,
    color: 'white',
  },
  transition: {
    transition: 'visibility 1s, opacity 1s ease-in-out',
  },
  hiddenRoot: {
    visibility: 'hidden',
  },
  hiddenToolbar: {
    opacity: 0,
  },
}));

export default function Bar({ show, ...props }: ObjKeyValue): ReactElement {
  const classes = useStyles();
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div>
      <AppBar
        color="transparent"
        style={{
          backgroundColor: '#00000000',
        }}
        {...props}
        elevation={0}
        disableGutters={true}
      >
        <Toolbar>
          <LogoMenu />
          <div className={classes.grow} />
          <TopCenterMenu show={show} />
          <div className={classes.grow} />
          <LanguageButton show={show} />

          <TopRightMenu show={show} />

          <IconButton
            className={{ root: clsx(classes.transition, !show && classes.hiddenToolbar) }}
            edge="start"
            onClick={() => setOpenDrawer(true)}
            style={{
              marginLeft: theme.spacing(1),
            }}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon classes={{ root: clsx(classes.transition, !show && classes.hiddenToolbar) }} />
          </IconButton>
        </Toolbar>
        <DrawerMenu open={openDrawer} onClose={() => setOpenDrawer(false)} />
      </AppBar>
    </div>
  );
}
