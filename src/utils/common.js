import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ru';

dayjs.extend(relativeTime);

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

export const composeHOCs = (Component, hocsArray) =>
  hocsArray.reduceRight((result, hoc) => hoc(result), Component);

export const getRelativeTime = (date) =>
  dayjs(date).locale('ru').fromNow();
