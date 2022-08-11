import React, {
  useEffect,
} from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import Header from '../../header/header';
import Gallery from '../../gallery/gallery';

import {
  StoreNameSpace,
} from '../../../const';
import {
  fetchImageItem,
  fetchImagesList,
} from '../../../store/api-actions';

const Main = () => {
  const {
    isImagesListLoaded,
    choosenImageID,
  } = useSelector((state) => ({
    ...state[StoreNameSpace.DATA],
    ...state[StoreNameSpace.MAIN_PAGE],
  }));

  const dispatch = useDispatch();

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
      </main>
    </div>
  );
};

export default Main;
