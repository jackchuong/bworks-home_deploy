import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { makeStyles, Fade } from '@material-ui/core';
import Router from 'next-translate/Router';

interface Props {
  children: ReactElement;
}

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
  },
}));

export default function LayoutTransition({ children }: Props): ReactElement {
  const classes = useStyles();
  const [show, setShow] = useState<boolean>(true);
  const refPath = useRef<string>('');
  useEffect(() => {
    refPath.current = Router.asPath;
    const handleRouteChange = (url: string) => {
      if (url !== refPath.current) {
        setShow(false);
      }
    };

    Router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      Router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);
  return (
    <Fade in={show} timeout={{ enter: 2000, exit: 500 }}>
      <div className={classes.root}>{children}</div>
    </Fade>
  );
}
