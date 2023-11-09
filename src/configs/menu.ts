export const fullMenu = [
  { url: '/', name: 'common:logoName', priority: 4 },
  { url: '/how-it-works', name: 'common:howItWorks', priority: 1 },
  { url: 'https://bworks.app/web/#/register', name: 'common:submitAnAccount', priority: 1, target: '_blank' },
  { url: '/bworks-token', name: 'common:bWorksToken', priority: 1 },
  { url: '/promotion', name: 'common:promotion', priority: 1 },
  { url: 'https://bworks.app/web/#/', name: 'common:login', priority: 2, target: '_blank' },
  /* { url: '/promotion', name: 'common:promotion', priority: 3 },
  { url: '/support', name: 'common:support', priority: 3 },
   */
];
export const logoMenu = fullMenu.filter((item) => item.priority === 4);
export const topCenterMenu = fullMenu.filter((item) => item.priority === 1);
export const topRightMenu = fullMenu.filter((item) => item.priority === 2);
export const subMenu = fullMenu.filter((item) => item.priority === 3);
