import React from 'react';

import MenuButton from './menuButton';
import Link from '../commons/link';
import { logoMenu } from '@/configs/menu';

export default function LogoMenu() {
  return (
    <div>
      <MenuButton href={logoMenu[0].url} component={Link} title={logoMenu[0].name} />
    </div>
  );
}
