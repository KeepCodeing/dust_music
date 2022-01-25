import { combineReducers } from "redux";

import { reducer as recommendReducer } from "../pages/index/c-pages/recommend/store";

const reducer = combineReducers({
  recommend: recommendReducer,
});

export default reducer;
