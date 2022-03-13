/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import NextLink from 'next-translate/Link';
import MuiLink from '@material-ui/core/Link';

interface NextComposedProps {
  as?: string;
  href: string;
}

const NextComposed = React.forwardRef(function NextComposed(props: NextComposedProps, ref: any) {
  const { as, href, ...other } = props;
  return (
    <NextLink href={href} as={as} passHref={href.indexOf('http') === 0}>
      <a ref={ref} {...other} />
    </NextLink>
  );
});

function RawLink(props: any) {
  const { href, activeClassName = 'active', className: classNameProps, innerRef, naked, ...other } = props;
  const router = useRouter();
  const pathname = typeof href === 'string' ? href : href.pathname;
  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName,
  });

  const isExternal = href.indexOf('https:') === 0 || href.indexOf('mailto:') === 0;

  if (isExternal) {
    return <MuiLink className={className} href={href} ref={innerRef} {...other} />;
  }

  if (naked) {
    return <NextComposed className={className} ref={innerRef} href={href} {...other} />;
  }

  return <MuiLink component={NextComposed} className={className} ref={innerRef} href={href} {...other} />;
}

const Link = React.forwardRef((props, ref) => <RawLink {...props} innerRef={ref} />);
Link.displayName = 'Link';
export default Link;
