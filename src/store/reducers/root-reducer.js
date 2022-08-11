import {
  combineReducers,
} from '@reduxjs/toolkit';

import {
  reducer as dataReducer,
} from './data';
import {
  reducer as mainPageReducer,
} from './main-page';
import {
  reducer as userReducer,
} from './user';
import {
  StoreNameSpace,
} from '../../const';

export const rootReducer = combineReducers({
  [StoreNameSpace.DATA]: dataReducer,
  [StoreNameSpace.MAIN_PAGE]: mainPageReducer,
  [StoreNameSpace.USER]: userReducer,
});
