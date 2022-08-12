import {
  createAction,
} from '@reduxjs/toolkit';

import {
  StoreNameSpace,
} from '../../const';

const ActionType = {
  SET_IMAGES_LIST: `${StoreNameSpace.DATA}/setImagesList`,
  SET_IMAGE_ITEM: `${StoreNameSpace.DATA}/setImageItem`,
  RESET_IMAGE_ITEM: `${StoreNameSpace.DATA}/resetImageItem`,
};

export const setImagesList = createAction(ActionType.SET_IMAGES_LIST, (data) => ({
  payload: data,
}));

export const setImageItem = createAction(ActionType.SET_IMAGE_ITEM, (data) => ({
  payload: data,
}));

export const resetImageItem = createAction(ActionType.RESET_IMAGE_ITEM);
