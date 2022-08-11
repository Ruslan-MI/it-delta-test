import {
  createReducer,
} from '@reduxjs/toolkit';

import {
  userData,
} from '../../mocks';

const initialState = {
  userData,
};

export const reducer = createReducer(initialState, () => { });
