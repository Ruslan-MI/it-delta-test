import {
  createAction,
} from '@reduxjs/toolkit';

import {
  StoreNameSpace,
} from '../../const';

const ActionType = {
  SET_CHOOSEN_IMAGE_ID: `${StoreNameSpace.PAGE}/setChoosenImageID`,
  RESET_CHOOSEN_IMAGE_ID: `${StoreNameSpace.PAGE}/resetChoosenImageID`,
};

export const setChoosenImageID = createAction(ActionType.SET_CHOOSEN_IMAGE_ID, (id) => ({
  payload: id,
}));

export const resetChoosenImageID = createAction(ActionType.RESET_CHOOSEN_IMAGE_ID);
