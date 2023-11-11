import React, { ReactElement } from 'react';
import { Typography, Container } from '@material-ui/core';
import Link from '@/components/commons/link';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import Box from '@mui/material/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    bottom: theme.spacing(1),
    textAlign: 'center',
    color: 'black',
    position: 'absolute',
    bottom: theme.spacing(1.5),
    transition: 'opacity 1s ease-in-out',
    zIndex: 3,
  },
  hidden: { opacity: 0 },
}));

export default function Footer({ show, ...props }: ObjKeyValue): ReactElement {
  const classes = useStyles();
  const theme = useTheme();
  //show or hide depend on screen size, matches true if size of screen =< md
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className={clsx(classes.root, !show && classes.hidden)} {...props}>
        <Typography variant="body2">
          <Link color="inherit" href="/">
            {'© '} {new Date().getFullYear()} {props.name}
          </Link>
          <Link color="inherit" href="/legal" style={{ marginLeft: 20 }}>
            Legal
          </Link>
          <Link color="inherit" href="/privacy" style={{ marginLeft: 20 }}>
            Privacy
          </Link>
          <Link color="inherit" href="/news" style={{ marginLeft: 20 }}>
            News
          </Link>
          <Link color="inherit" href="/contact" style={{ marginLeft: 20 }}>
            Contact
          </Link>
          <Link color="inherit" href="/about" style={{ marginLeft: 20 }}>
            About
          </Link>
        </Typography>
      </div>
    </Box>
  );
}
