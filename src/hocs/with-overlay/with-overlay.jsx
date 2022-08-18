import React, {
  useEffect,
  useRef,
} from 'react';
import PropTypes from 'prop-types';

import {
  scrollLock,
} from '../../utils/scroll-lock';

const withOverlay = (Component) => {
  const WithOverlayInnerComponent = ({
    onModalClose,
    ...props
  }) => {
    const overlayRef = useRef();

    const handleOverlayMouseDown = (evt) => {
      if (evt.target.matches('.overlay') || evt.target.matches('.overlay__wrapper')) {
        onModalClose();
      }
    };

    const handleOverlayKeydown = (evt) => {
      if (evt.key === 'Escape') {
        onModalClose();
      }
    };

    const handleOverlayBlur = (evt) => {
      if (!overlayRef.current.contains(evt.relatedTarget)) {
        overlayRef.current.focus();
      }
    };

    useEffect(() => {
      scrollLock.disableScrolling();
      overlayRef.current.focus();

      return () => {
        scrollLock.enableScrolling();
      };
    });

    return (
      <div className='overlay container' tabIndex='0' ref={overlayRef}
        onMouseDown={handleOverlayMouseDown} onKeyDown={handleOverlayKeydown} onBlur={handleOverlayBlur}
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
