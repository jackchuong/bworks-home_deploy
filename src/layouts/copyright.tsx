import React, { ReactElement } from 'react';
import { Typography } from '@material-ui/core';
import Link from '@/components/commons/link';

export default function Copyright(): ReactElement {
  return (
    <Typography
      variant="body2"
      align="right"
      right="0"
      style={{
        position: 'absolute',
        bottom: '0px',
        right: '0px',
      }}
    >
      {'Copyright © '}
      <Link color="inherit" href="/"></Link> {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
