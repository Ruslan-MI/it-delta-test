import {
  createReducer,
} from '@reduxjs/toolkit';

import {
  runImagesListLoading,
  loadingImagesList,
  runImageItemLoading,
  loadingImageItem,
} from '../actions/data';

const initialState = {
  isImagesListLoaded: false,
  imagesList: null,
  isImageItemLoaded: false,
  imageItem: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(runImagesListLoading, (state) => {
    state.isImagesListLoaded = false;
  });

  builder.addCase(loadingImagesList, (state, action) => {
    state.imagesList = action.payload;
    state.isImagesListLoaded = true;
  });

  builder.addCase(runImageItemLoading, (state) => {
    state.isImageItemLoaded = false;
  });

  builder.addCase(loadingImageItem, (state, action) => {
    state.imageItem = action.payload;
    state.isImageItemLoaded = true;
  });
});
