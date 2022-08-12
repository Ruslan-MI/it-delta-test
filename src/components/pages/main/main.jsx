import React, {
  useEffect,
} from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import Header from '../../header/header';
import Gallery from '../../gallery/gallery';
import GalleryModal from '../../gallery-modal/gallery-modal';

import {
  StoreNameSpace,
} from '../../../const';
import {
  fetchImageItem,
  fetchImagesList,
} from '../../../store/api-actions';
import {
  resetChoosenImageID,
} from '../../../store/actions/page';
import {
  resetImageItem,
} from '../../../store/actions/data';

const Main = () => {
  const {
    imagesList,
    imageItem,
    choosenImageID,
  } = useSelector((state) => ({
    ...state[StoreNameSpace.DATA],
    ...state[StoreNameSpace.PAGE],
  }));

  const isImagesListLoaded = !!imagesList;
  const isImageItemLoaded = !!imageItem;

  const dispatch = useDispatch();

  const onGalleryModalClose = () => {
    dispatch(resetChoosenImageID());
    dispatch(resetImageItem());
  };

  useEffect(() => {
    dispatch(fetchImagesList());
  }, []);

  useEffect(() => {
    if (choosenImageID) {
      dispatch(fetchImageItem(choosenImageID));
    }
  }, [
    choosenImageID,
  ]);

  return (
    <div className='page page--main'>
      <Header />
      <main>
        <h1 className='visually-hidden'>Тестовое задание «IT-Delta»</h1>
        <Gallery isDataLoaded={isImagesListLoaded} />
        {
          choosenImageID &&
          <GalleryModal isLightStub isDataLoaded={isImageItemLoaded}
            onModalClose={onGalleryModalClose}
          />
        }
      </main>
    </div>
  );
};

export default Main;
