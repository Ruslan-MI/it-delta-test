import {
  ApiRoute,
} from '../const';
import {
  setImagesList,
  setImageItem,
} from './actions/data';

export const fetchImagesList = () => async (dispatch, _getState, api) => {
  const result = await api.get(ApiRoute.IMAGES);

  dispatch(setImagesList(result.data));
};

export const fetchImageItem = (id) => async (dispatch, _getState, api) => {
  const result = await api.get(`${ApiRoute.IMAGES}/${id}`);

  dispatch(setImageItem(result.data));
};

export const sendComment = ({
  id,
  name,
  comment,
  cb,
}) => async (_dispatch, _getState, api) => {
  const result = await api.post(`${ApiRoute.IMAGES}/${id}${ApiRoute.COMMENTS}`, {
    name,
    comment,
  });

  cb(result);
};
