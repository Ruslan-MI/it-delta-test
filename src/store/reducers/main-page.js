import {
  createReducer,
} from '@reduxjs/toolkit';

import {
  resetChoosenImageID,
  setChoosenImageID,
} from '../actions/main-page';

const initialState = {
  choosenImageID: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setChoosenImageID, (state, action) => {
    state.choosenImageID = action.payload;
  });

  builder.addCase(resetChoosenImageID, (state) => {
    state.choosenImageID = initialState.choosenImageID;
  });
});
