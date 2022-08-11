import {
  createAction,
} from '@reduxjs/toolkit';

import {
  StoreNameSpace,
} from '../../const';

const ActionType = {
  SET_CHOOSEN_IMAGE: `${StoreNameSpace.MAIN_PAGE}/setChoosenImage`,
  RESET_CHOOSEN_IMAGE: `${StoreNameSpace.MAIN_PAGE}/resetChoosenImage`,
};

export const setChoosenImage = createAction(ActionType.SET_CHOOSEN_IMAGE, (id) => ({
  payload: id,
}));

export const resetChoosenImage = createAction(ActionType.RESET_CHOOSEN_IMAGE);
