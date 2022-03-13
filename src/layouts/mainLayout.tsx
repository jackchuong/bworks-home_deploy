import React, { ReactElement } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Bar from './bar';
import Footer from './footer';
import RootContextProvider from '@/components/contexts/rootContext';
import dynamic from 'next/dynamic';
import LayoutTransition from './layoutTransition';
import clsx from 'clsx';
const Particles = dynamic(() => import('./particles'));

interface MainLayoutProps {
  children: ReactElement;
  footer?: boolean;
  bar?: boolean;
  particle?: boolean;
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    overflow: 'auto', //giu chieu doc khong bi scroll
  },

  hidden: {
    opacity: 0,
  },
  position: theme.position.relative,
}));

export default function MainLayout({
  children,
  footer = true,
  particle = true,
  bar = true,
  ...rest
}: MainLayoutProps): ReactElement {
  const classes = useStyles();

  return (
    <RootContextProvider>
      <Container disableGutters={true} maxWidth={false} className={classes.root} {...rest}>
        {particle && <Particles />}
        <Bar show={bar} />
        <LayoutTransition>{children}</LayoutTransition>
        <Footer show={footer} />
      </Container>
    </RootContextProvider>
  );
}
