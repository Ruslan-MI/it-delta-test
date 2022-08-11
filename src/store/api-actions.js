import {
  ApiRoute,
} from '../const';
import {
  runImagesListLoading,
  loadingImagesList,
  runImageItemLoading,
  loadingImageItem,
} from './actions/data';

export const fetchImagesList = () => async (dispatch, _getState, api) => {
  dispatch(runImagesListLoading());

  const result = await api.get(ApiRoute.IMAGES);

  dispatch(loadingImagesList(result.data));
};

export const fetchImageItem = (id) => async (dispatch, _getState, api) => {
  dispatch(runImageItemLoading());

  const result = await api.get(`${ApiRoute.IMAGES}/${id}`);

  dispatch(loadingImageItem(result.data));
};

export const addComment = (id, {
  name,
  comment,
}) => async (_dispatch, _getState, api) => {
  const result = await api.post(`${ApiRoute.IMAGES}/${id}${ApiRoute.COMMENTS}`, {
    name,
    comment,
  });

  // eslint-disable-next-line
  console.log(result);
};
