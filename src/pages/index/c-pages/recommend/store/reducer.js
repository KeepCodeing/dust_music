import * as actions from "./constants";
import { Map } from "immutable";

const initialState = Map({
  topBanner: [],
  hotRecommend: [],
});

const reducer = function (state = initialState, action) {
  switch (action.type) {
    case actions.CHANGE_TOP_BANNER:
      return state.set("topBanner", action.topBanner);

    case actions.CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommend", action.hotRecommend);

    default:
      return state;
  }
};

export default reducer;
