const LinkType = {
  EMAIL: 'email',
  PHONE: 'phone',
};

export const getLinkWithPrefix = (type, href) => {
  let prefix;

  switch (type) {
    case LinkType.EMAIL:
      prefix = 'mailto:';
      break;
    case LinkType.PHONE:
      prefix = 'tel:';
      break;
    default:
      prefix = '';
  }

  return `${prefix}${href}`;
};
