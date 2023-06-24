export const fullMenu = [
  { url: '/', name: 'common:logoName', priority: 4 },
  { url: 'https://bworks.app/emp#/', name: 'common:employer', priority: 1 },
  { url: 'https://bworks.app/jsk#/', name: 'common:jobSeeker', priority: 1 },
  { url: '/milestones', name: 'common:milestone', priority: 1 },
  { url: '/submit', name: 'common:submit', priority: 1 },

  { url: 'https://bworks.app/emp#/', name: 'common:login', priority: 2 },
  { url: '/submit', name: 'common:submit', priority: 3 },
  { url: '/promotion', name: 'common:promotion', priority: 3 },
  { url: '/support', name: 'common:support', priority: 3 },
];
export const logoMenu = fullMenu.filter((item) => item.priority === 4);
export const topCenterMenu = fullMenu.filter((item) => item.priority === 1);
export const topRightMenu = fullMenu.filter((item) => item.priority === 2);
export const subMenu = fullMenu.filter((item) => item.priority === 3);
