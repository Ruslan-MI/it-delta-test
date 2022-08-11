import {
  createAction,
} from '@reduxjs/toolkit';

import {
  StoreNameSpace,
} from '../../const';

const ActionType = {
  RUN_IMAGES_LIST_LOADING: `${StoreNameSpace.DATA}/runImagesListLoading`,
  LOADING_IMAGES_LIST: `${StoreNameSpace.DATA}/loadingImagesList`,
  RUN_IMAGE_ITEM_LOADING: `${StoreNameSpace.DATA}/runImageItemLoading`,
  LOADING_IMAGE_ITEM: `${StoreNameSpace.DATA}/loadingImageItem`,
};

export const runImagesListLoading = createAction(ActionType.RUN_IMAGES_LIST_LOADING);

export const loadingImagesList = createAction(ActionType.LOADING_IMAGES_LIST, (data) => ({
  payload: data,
}));

export const runImageItemLoading = createAction(ActionType.RUN_IMAGE_ITEM_LOADING);

export const loadingImageItem = createAction(ActionType.LOADING_IMAGE_ITEM, (data) => ({
  payload: data,
}));
