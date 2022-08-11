import React from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import withLoadingStub from '../../hocs/with-loading-stub/with-loading-stub';

import {
  StoreNameSpace,
} from '../../const';
import {
  setChoosenImageID,
} from '../../store/actions/main-page';

const Gallery = () => {
  const {
    imagesList,
  } = useSelector((state) => ({
    ...state[StoreNameSpace.DATA],
  }));

  const dispatch = useDispatch();

  const handleGalleryListClick = (evt) => {
    evt.preventDefault();

    if (evt.target.matches('.gallery__image')) {
      dispatch(setChoosenImageID(evt.target.dataset.id));
    }
  };

  return (
    <section className='gallery'>
      <div className='container'>
        <h2 className='visually-hidden'>Галерея</h2>
        <ul className='gallery__list' onClick={handleGalleryListClick}>
          {
            imagesList.map(({
              id,
              url,
            }) => (
              <li className='gallery__item' key={id}>
                <div className='gallery__image-wrapper'>
                  <a className='gallery__image-link' href="#">
                    <img className='gallery__image' src={url} alt="Фотография" data-id={id} />
                  </a>
                </div>
                <p className='gallery__image-id'>id: {id}</p>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  );
};

export default withLoadingStub(Gallery);
