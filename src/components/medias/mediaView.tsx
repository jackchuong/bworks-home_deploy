import React, { ReactElement, useEffect, useState, useRef } from 'react';
import Card from '@material-ui/core/Card';
import Fade from '@material-ui/core/Fade';
import CardMedia from '@material-ui/core/CardMedia';
import Router from 'next-translate/Router';

interface Props {
  id?: string;
}

export default function MediaView({ id = 'random' }: Props): ReactElement {
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
    <Card style={{ width: '100%', height: 'calc(100vh - 100px)', backgroundColor: 'transparent' }}>
      <Fade in={show} timeout={{ enter: 2000, exit: 500 }}>
        <CardMedia
          // className={classes.media}
          style={{ height: '150vh', backgroundColor: 'transparent' }}
          image={`https://source.unsplash.com/${id}/2880x1800`}
          title="Home"
        />
      </Fade>
    </Card>
  );
}
