/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactElement, Fragment } from 'react';
import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  useTheme,
  useMediaQuery,
  Divider,
  Button,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { topCenterMenu, subMenu, topRightMenu } from '@/configs/menu';
import Router from 'next-translate/Router';
import useTranslation from 'next-translate/useTranslation';

interface Props {
  open: boolean;
  onClose: () => void;
}

const useStyles = makeStyles(() => ({
  list: {
    width: 250,
  },
}));

export default function DrawerMenu({ open, onClose }: Props): ReactElement {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useTranslation();
  const onClick = (item) => {
    Router.pushI18n(item.url);
    onClose();
  };
  return (
    <SwipeableDrawer anchor="right" open={open} onOpen={() => {}} onClose={onClose}>
      <List className={classes.list}>
        <div style={{ marginTop: 12 }}>
          <Button style={{ float: 'right' }} onClick={onClose}>
            <CloseIcon />
          </Button>
        </div>
        {matches &&
          topCenterMenu.map((item) => (
            <Fragment key={item}>
              <ListItem button key={item.name}>
                <ListItemText primary={t(item.name).toUpperCase()} onClick={() => onClick(item)} />
              </ListItem>
              <Divider />
            </Fragment>
          ))}

        {subMenu.map((item) => (
          <Fragment key={item}>
            <ListItem button key={item.name}>
              <ListItemText primary={t(item.name)} onClick={() => onClick(item)} />
            </ListItem>
            <Divider />
          </Fragment>
        ))}
        {matches &&
          topRightMenu.map((item) => (
            <ListItem button key={item.name}>
              <ListItemText primary={t(item.name).toUpperCase()} onClick={() => onClick(item)} />
            </ListItem>
          ))}
      </List>
    </SwipeableDrawer>
  );
}
