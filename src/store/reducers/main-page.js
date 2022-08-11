import {
  createReducer,
} from '@reduxjs/toolkit';

import {
  resetChoosenImage,
  setChoosenImage,
} from '../actions/main-page';

const initialState = {
  choosenImage: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setChoosenImage, (state, action) => {
    state.choosenImage = action.payload;
  });

  builder.addCase(resetChoosenImage, (state) => {
    state.choosenImage = initialState.choosenImage;
  });
});
