import React, { ReactElement } from 'react';
import Button, { ButtonProps } from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { useUpdateVersion } from '../contexts/rootContext';
import Link from '../commons/link';
// import { debounce } from 'lodash';

export interface MenuButtonProps extends ButtonProps {
  title?: string;
  noTranslation?: boolean;
  tReady?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: any;
}

const useStyles = makeStyles(() => ({
  button: {
    color: 'black',
    // textDecoration: 'underline',
  },
  selected: {
    textDecoration: 'underline',
  },
}));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function MenuButton({ noTranslation, title, tReady, ...rest }: MenuButtonProps): ReactElement {
  const classes = useStyles();
  const router = useRouter();
  const currentPath = router.route.indexOf('/vi') === 0 ? router.route.substring(3) : router.route;

  const updateVersion = useUpdateVersion();
  const { t } = useTranslation();
  // const { version } = useRootContext();
  const onClick = () => {
    // e.preventDefault();
    updateVersion();
  };
  return (
    <Button
      size="large"
      component={Link}
      onClick={onClick}
      href={rest.href}
      className={clsx(classes.button, rest.href === currentPath && classes.selected)}
      style={{ color: 'white' }}
      {...rest}
    >
      {noTranslation ? title : t(title)}
    </Button>
  );
}

export default MenuButton;
