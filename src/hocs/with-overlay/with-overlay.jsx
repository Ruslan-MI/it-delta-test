import React, {
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

import ScrollLock from '../../utils/scroll-lock';

const withOverlay = (Component) => {
  const WithOverlayInnerComponent = ({
    onModalClose,
    ...props
  }) => {
    const scrollLock = new ScrollLock();

    const handleOverlayMouseDown = (evt) => {
      if (evt.target.matches('.overlay')) {
        onModalClose();
      }
    };

    const handleOverlayKeydown = (evt) => {
      if (evt.key === 'Escape') {
        onModalClose();
      }
    };

    useEffect(() => {
      scrollLock.disableScrolling();

      return () => {
        scrollLock.enableScrolling();
      };
    });

    return (
      <div className='overlay container'
        onMouseDown={handleOverlayMouseDown} onKeyDown={handleOverlayKeydown}
      >
        <div className='overlay__wrapper'>
          <Component {...props} onModalClose={onModalClose} />
        </div>
      </div>
    );
  };

  WithOverlayInnerComponent.propTypes = {
    onModalClose: PropTypes.func.isRequired,
  };

  return WithOverlayInnerComponent;
};

export default withOverlay;
