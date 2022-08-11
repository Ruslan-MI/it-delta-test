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
  StoreNameSpace,
} from '../../const';

export const rootReducer = combineReducers({
  [StoreNameSpace.DATA]: dataReducer,
  [StoreNameSpace.MAIN_PAGE]: mainPageReducer,
});
