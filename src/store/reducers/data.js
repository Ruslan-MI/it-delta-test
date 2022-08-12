import {
  createReducer,
} from '@reduxjs/toolkit';

import {
  setImagesList,
  setImageItem,
  resetImageItem,
} from '../actions/data';

const initialState = {
  imagesList: null,
  imageItem: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setImagesList, (state, action) => {
    state.imagesList = action.payload;
  });

  builder.addCase(setImageItem, (state, action) => {
    state.imageItem = action.payload;
  });

  builder.addCase(resetImageItem, (state) => {
    state.imageItem = initialState.imageItem;
  });
});
