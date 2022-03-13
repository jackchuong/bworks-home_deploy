import React from 'react';
import { Button } from '@material-ui/core/';
import Link from './link';

const large = {
  borderRadius: 15,
  width: 250,
  backgroundColor: 'black',
  variant: 'outlined',
  color: 'red',
  marginLeft: 10,
};

const medium = {
  borderRadius: 15,
  width: 160,
  backgroundColor: 'transparent',
  variant: 'outlined',
  color: 'black',
  borderStyle: 'solid',
  borderWidth: 2,
  borderColor: 'black',
};

interface largeButtonProps {
  backgroundColor?: string;
  color?: string;
  href?: string;
  name: string;
}
interface mediumButtonProps {
  color?: string;
  href?: string;
  name: string;
}

//pass background, text color and name via props
export function LargeButton(props: LargeButtonProps) {
  const backgroundColor = props.backgroundColor ? props.backgroundColor : large.backgroundColor;
  const color = props.color ? props.color : large.color;
  const href = props.href || '';
  return (
    <Button style={{ ...large, backgroundColor: backgroundColor, color: color }} component={Link} href={href}>
      {props.name}{' '}
    </Button>
  );
}
//pass border, text color and name via props
export function MediumButton({ style = {}, ...props }) {
  const color = props.color ? props.color : medium.color;
  const fixStyle = { ...medium, color: color, borderColor: color, ...style };
  const href = props.href || '';
  return (
    <Button style={fixStyle} {...props} component={Link} href={href}>
      {props.name}
    </Button>
  );
}
