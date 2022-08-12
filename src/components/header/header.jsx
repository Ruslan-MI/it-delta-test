import React from 'react';
import {
  useSelector,
} from 'react-redux';

import {
  StoreNameSpace,
} from '../../const';
import {
  getLinkWithPrefix,
} from '../../utils/common';

const userContactsTypeMap = {
  email: 'Message',
  phone: 'Call',
};

const Header = () => {
  const {
    userData: {
      name: userName,
      avatar: {
        src: avatarSrc,
        width: avatarWidth,
        height: avatarHeight,
      },
      contacts,
    },
  } = useSelector((state) => ({
    ...state[StoreNameSpace.USER],
  }));

  return (
    <header className='page__header header'>
      <div className='container container--header'>
        <div className='header__decorative-banner'
          style={{
            backgroundImage: 'url(img/decor/header-banner.jpg)',
          }}
        />
        <nav className='header__nav'>
          <div className='header__user-data-wrapper'>
            <div className='header__user-avatar-wrapper'>
              <img className='header__user-avatar' src={`img/user-avatars/${avatarSrc}`} alt={`Аватар пользователя ${userName}`}
                width={avatarWidth} height={avatarHeight}
              />
            </div>
            <p className='header__user-name'>{userName}</p>
          </div>
          <ul className='header__user-contacts-list'>
            {
              contacts.map(({
                type,
                href,
              }) => (
                <li className='header__user-contacts-item' key={href}>
                  <a className={`header__user-contacts-link header__user-contacts-link--${type}`}
                    href={getLinkWithPrefix(type, href)}
                  >
                    {userContactsTypeMap[type]}
                  </a>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
