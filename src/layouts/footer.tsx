import React, { ReactElement } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container } from '@material-ui/core';
import Link from '@/components/commons/link';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    bottom: theme.spacing(1),
    textAlign: 'center',
    color: 'white',
    position: 'absolute',
    bottom: theme.spacing(1.5),
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 3,
    transition: 'opacity 1s ease-in-out',
  },
  hidden: { opacity: 0 },
}));
export default function Footer({ show, ...props }: ObjKeyValue): ReactElement {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, !show && classes.hidden)} {...props}>
      <Typography variant="body2">
        <Link color="inherit" href="/">
          {'© '} {new Date().getFullYear()} {props.name}
        </Link>
        <Link color="inherit" href="/legal" style={{ marginLeft: 20 }}>
          Legal
        </Link>
        <Link color="inherit" href="/careers" style={{ marginLeft: 20 }}>
          Careers
        </Link>
        <Link color="inherit" href="/news" style={{ marginLeft: 20 }}>
          News
        </Link>
        <Link color="inherit" href="/location" style={{ marginLeft: 20 }}>
          Location
        </Link>
        <Link color="inherit" href="/contact" style={{ marginLeft: 20 }}>
          Contact
        </Link>
        <Link color="inherit" href="/about" style={{ marginLeft: 20 }}>
          About
        </Link>
      </Typography>
    </div>
  );
}
