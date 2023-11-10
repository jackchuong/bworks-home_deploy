import React, { ReactElement } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Bar from './bar';
import Footer from './footer';
import RootContextProvider from '@/components/contexts/rootContext';
import LayoutTransition from './layoutTransition';

interface MainLayoutProps {
  children: ReactElement;
  footer?: boolean;
  bar?: boolean;
  particle?: boolean;
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    overflow: 'auto',
  },

  hidden: {
    opacity: 0,
  },
  position: theme.position.relative,
}));

export default function MainLayout({ children, footer = true, bar = true, ...rest }: MainLayoutProps): ReactElement {
  const classes = useStyles();

  return (
    <RootContextProvider>
      <Container disableGutters={true} maxWidth={false} className={classes.root} {...rest}>
        <Bar show={bar} />
        <LayoutTransition>{children}</LayoutTransition>
        <Footer show={footer} />
      </Container>
    </RootContextProvider>
  );
}
