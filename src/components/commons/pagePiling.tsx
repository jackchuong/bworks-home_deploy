import React, { ReactElement, useEffect } from 'react';
import { ObjKeyValue } from '../dtos/common.dto';

interface Props {
  id: string;
  className?: string;
  children: ReactElement;
  options?: ObjKeyValue;
}

const DEFAULT_OPTIONS = {
  sectionsColor: ['#2196f3', '#ff9800', '#00bcd4', '#3f51b5', '#e91e63'],
  direction: 'vertical',
  css3: true,
  touchSensitivity: 5,
};

export default function PagePiling({ className, id, children, options: rawOptions = {} }: Props): ReactElement {
  const options = { ...DEFAULT_OPTIONS, ...rawOptions };
  useEffect(() => {
    // eslint-disable-next-line
    const j = $;
    j(document).ready(function () {
      const p = j(`#${id}`);
      if (p && p.pagepiling) {
        p.pagepiling(options);
      }
    });
    return () => {
      j(`#${id}`).remove();
      j('#pp-nav').remove();
    };
  }, []);
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }} id={id} className={className}>
      {children}
    </div>
  );
}
